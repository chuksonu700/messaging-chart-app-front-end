import React,{useState,useEffect} from 'react'
import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import Pusher from 'pusher-js';
import axios from './Components/axios';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';

function App(){
    const [messages, setMessages] =useState([]);
    const [{user}, dispatch] =useStateValue()

    useEffect(()=>{
        axios.get('/messages/sync').then((res)=>{
            setMessages(res.data)
            console.log('res is', res)
        })
        
    },[])

    useEffect(()=>{
        const pusher = new Pusher('d66f3a82e52f6d9d181d',{
            cluster:"eu"
        });
         const channel = pusher.subscribe('messages');
         channel.bind('inserted',(data)=>{
             setMessages([...messages,data]);
         });

         return ()=>{
             channel.unbind_all();
             channel.unsubscribe()
         }
    },[messages])
    console.log(messages)
    return(
        <div className='app'>
                {
                    !user ? <Login />
                        :
                    <div className='app__body'>
                            <Sidebar messages={messages}/>
                        <Chat messages={messages}/>
                    </div>
                }
        </div>
    )
}

const newApp = ()=>{
    console.log("start MObile View");
}

export default App;