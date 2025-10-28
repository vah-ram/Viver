import { useEffect, useState, useRef } from 'react'
import Header from '../header/Header'
import MenuBar from '../main/MenuBar/MenuBar'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import io from "socket.io-client"
import { Host, getMessageHost, addMessageHost, addContactHost, getContactHost, getUserHost } from "../Hosts.js"
import MobileMenuBar from '../mobileMenuBar/MobileMenuBar.js'

const socket = io.connect(Host);

function Message({ currentUser }) {

    const navigate = useNavigate();

    const [ user,setUser ] = useState("");
    const [ inputValue, setInputValue ] = useState("");
    const [ messages, setMessages ] = useState([]);
    const [ contacts, setContacts ] = useState([]);

    const scrollMessagesRef = useRef(null);
    const sendSound = useRef(null);
    const { id } = useParams();

    useEffect(() => {
        const getUser = async() => {
            const res = await axios.get( getUserHost, { 
                params: { id: id } 
            });

            if(res) {
                setUser(res.data);
            };
        };

        getUser();
    },[id]);

    const addMessage = async(evt) => {
        evt.preventDefault();

        if(inputValue == "") {
            return
        };

        const res = await axios.post( addMessageHost, {
            from: currentUser?._id,
            to: id,
            message: inputValue
        });

        socket.emit("send_message");
        socket.emit("add_contact");

        sendSound.current.play();

        if(res.status) {
            setInputValue('')
        }

        await axios.post( addContactHost, {
            myId: currentUser?._id,
            contactId: id
        });

    };

    useEffect(() => {
        if (!currentUser || !id) return;

        const getMessages = async () => {
            try {
                const res = await axios.get(getMessageHost, {
                    params: { 
                        from: currentUser._id,
                        to: id
                    }
                });

                if (res.data && res.data.messages) {
                    setMessages(res.data.messages);
                } else {
                    setMessages([]);
                }
            } catch (err) {
                console.error("Failed to fetch messages:", err);
                setMessages([]);
            }
        };

        getMessages();

        socket.on("receive_message", () => {
            getMessages();
        });

         return () => {
            socket.off("receive_message");
        };

    }, [id, currentUser]);

    useEffect(() => {

        const getContacts = async() => {
        
            const res = await axios.get( getContactHost, {
                params: { myId: currentUser?._id }
            });

            if(res) {
                setContacts(res.data.contacts)
            };

        };

        getContacts();

        socket.on("added_contact", getContacts);

    }, [currentUser]);

    useEffect(() => {
        scrollMessagesRef.current?.scrollIntoView();
    }, [messages]);

    const copyMessage = (text) => {
        navigator.clipboard.writeText(text)
    };
    
  return (
    <>
        <Header currentUser={currentUser}/>
        
        <section className='flex flex-row w-full'>
            <MenuBar />
            <MobileMenuBar />

            <div className='w-full h-auto mt-[70px] ml-[220px] flex flex-row border-l-1 border-gray-300 max-md:ml-0 max-md:mb-[70px]'>

                <div className='w-[300px] h-full flex flex-col  border-r-1 border-gray-300 pr-3 pl-3 max-md:hidden'>

                    <form 
                        className="w-full flex items-center justify-between rounded-md pl-3 pr-3 pt-2 pb-2 mt-2" style={{background: "#f5f5f5"}}
                        onSubmit={evt => evt.preventDefault()}>
                        <input 
                            type="" 
                            placeholder="Поиск"
                            className="w-[90%] outline-none border-none"/>

                            <button type="submit" 
                                    className="cursor-pointer">
                                <img 
                                    src="/img/search-icon.png"
                                    className="w-[15px] h-[15px]"/>
                            </button>
                    </form>

                    <div className='mt-5'>
                        {
                            contacts 
                            ?
                            contacts?.map((u,i) => {
                                return (
                                    <div 
                                        id={i} 
                                        className='w-full h-[50px] flex gap-3 items-center pl-3 hover:opacity-70 cursor-pointer'
                                        onClick={() => navigate(`/chat/${u._id}`)}>
                                        <span 
                                            className='w-[30px] h-[30px] rounded-full' 
                                            style={{ background: "url('/img/user-avatar-img.jpg') center center / cover no-repeat" }}>

                                        </span>

                                        <p>
                                            {u.username}
                                        </p>
                                    </div>
                                )
                            })
                            :
                            ''
                        }
                    </div>

                </div>

                <div className='w-[calc(100%-300px)] h-full flex justify-center items-center max-md:w-full'>

                        {
                            id 
                            ?
                                <div className='w-full h-full flex flex-col'>
                                    <div className='w-full h-[50px] flex flex-row justify-between pl-7 pr-5 items-center border-b-1 border-gray-300'>
                                        <div className='flex flex-row gap-2'>
                                            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                                <img 
                                                    src='/img/user-avatar-img.jpg' 
                                                    className='w-full h-full'/>
                                            </div>

                                            <span className='flex flex-col'>
                                                <h2 className='font-bold text-md'>
                                                    {user?.username}
                                                </h2>

                                                <p className='text-green-500 text-sm'>
                                                    Online
                                                </p>
                                            </span>
                                        </div>

                                        <ul className='flex flex-row gap-2 items-center'>
                                            <li>
                                                <button className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer'>
                                                    <img src='/img/call-icon.png' className='w-[20px] h-[20px]'/>
                                                </button>
                                            </li>

                                            <li>
                                                <button className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer'>
                                                    <img src='/img/video-call-icon.png' className='w-[25px] h-[25px]'/>
                                                </button>
                                            </li>

                                            <li>
                                                <button className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer'>
                                                    <img src='/img/3-dots.png' className='w-[20px] h-[20px]'/>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div 
                                        className='w-full h-[calc(100vh-50px-60px-70px)] flex flex-col p-3 gap-3 overflow-y-scroll max-md: h-[calc(100vh-50px-60px-70px-70px)]' 
                                        id='messages_div'>
                                            
                                        {
                                            messages.map(( u, i) => {
                                                if(u.from === currentUser._id) {
                                                    return (
                                                        <div 
                                                            id={i} 
                                                            className='px-3 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-0 bg-[#9246d5ff] text-white w-fit max-w-[70%]  ml-auto'
                                                            onContextMenu={() => copyMessage(u.message)}>
                                                            {u.message}
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div 
                                                            id={i} 
                                                            className='px-3 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-0 bg-[#b7b7b7ff] text-white w-fit max-w-[70%] mr-auto'
                                                            onContextMenu={() => copyMessage(u.message)}>
                                                            {u.message}
                                                        </div>
                                                    )
                                                }
                                            })
                                        }

                                        <div ref={scrollMessagesRef}></div>

                                    </div>

                                    <div className='w-full h-[60px] flex items-center gap-2 border-t-1 border-gray-300'>

                                        <button className='w-[40px] h-[40px] flex items-center justify-center cursor-pointer'>
                                            <img src='/img/smile-icon.png'/>
                                        </button>

                                        <form 
                                            className='w-[80%] h-[40px] border-1 border-gray-300 rounded-[25px] flex flex-row justify-between pl-3 pr-1' 
                                            onSubmit={addMessage}>
                                            <input 
                                                type="text" 
                                                value={inputValue}
                                                placeholder='Напишите сообщение․․․'
                                                className='w-[90%] outline-none text-sm'
                                                onChange={e => {
                                                    setInputValue(e.target.value)
                                                }}/>

                                            <button 
                                                type='submit'
                                                className='w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer'>
                                                <img 
                                                    src='/img/message-send.png' 
                                                    className='w-[20px] h-[20px]'/>
                                            </button>
                                        </form>

                                        <button className='w-[40px] h-[40px] flex items-center justify-center cursor-pointer'>
                                            <img src='/img/voice-icon.png'/>
                                        </button>

                                        <button className='w-[40px] h-[40px] flex items-center justify-center cursor-pointer'>
                                            <img src='/img/files-icon.png'/>
                                        </button>
                                    </div>
                                </div>
                            :
                                <div 
                                    className='w-full flex flex-col items-center justify-center gap-3 text-md'
                                    style={{
                                        height: "calc(100vh - 70px)"
                                    }}>
                                    <img 
                                        src='/img/chat-messaging.png'
                                        className='w-[130px] h-[130px]'/>
                                        Начать переписываться
                                </div>
                        }
                </div>

            </div>
        </section>

        <audio 
            src='/audio/send-audio.mp3' 
            preload='auto'
            ref={sendSound}></audio>
    </>
  )
}

export default Message