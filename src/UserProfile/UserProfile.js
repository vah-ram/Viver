import { useEffect, useState } from 'react'
import Header from '../header/Header'
import MenuBar from '../main/MenuBar/MenuBar'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { subscribeHost, getUserHost } from "../Hosts.js"

function UserProfile({ currentUser }) {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({});
    const [ subscribed, setSubscribed ] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const getUser = async() => {
            const res = await axios.get( getUserHost,{ 
                params: { id: id } 
            });

            if(res) {
                setUser(res.data);
            };

        };

        getUser();
    },[id]);

    const subscribeUser = async(evt) => {
        evt.preventDefault();

        try {
            
            const res = await axios.post( subscribeHost, {
                myId: currentUser?._id,
                subscribeId: id
            });

            if(res.status) {
                setSubscribed(true);
            } else {
               setSubscribed(false);
            };

        } catch(err) {
            console.error(err)
        }

    };

    useEffect(() => {

        if (!user || !currentUser || !user.subscribers) return;

        if (user.subscribers.includes(currentUser._id)) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }, [user, currentUser]);

  return (
    <>
        <Header/>
        <MenuBar/>
        
        <section 
            className='translate-y-[70px] ml-[220px] flex gap-[30px] h-[100vh] bg-[#f1f1f1c2] flex flex-col pt-5 items-center  rounded-tl-[30px]'
            style={{ width: "calc(100%-220px)" }}>
                <div className='w-auto h-auto flex flex-col pt-5'>
                    <div className='w-full h-full flex flex-row gap-[30px] justify-center'>

                        <div className='w-[180px] h-[180px] rounded-full overflow-hidden'
                        style={{ background: "url('/img/user-avatar-img.jpg') center center / cover no-repeat"}}>
                        </div>

                        <div className='w-[50%] flex flex-col pt-5 '>
                            <h2 className='text-lg font-bold'>
                                {user.username}
                            </h2>

                            <div className='flex flex-row gap-2 mt-4 text-sm'>
                                <span>
                                    0 публикаций
                                </span>

                                <span>
                                    {user.subscribers?.length} подписчиков
                                </span>

                                <span>
                                    {user.subscribed?.length} подписка
                                </span>
                            </div>

                            <p className='w-[70%] mt-4'>
                                Transforming homes with smart pool & massage tubs-where every day feels like a vacation.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex flex-row gap-5 justify-center mt-[30px]'>
                        

                        {
                            subscribed 
                            ?
                            <button 
                                className='p-5 h-[40px] flex gap-3 justify-center items-center rounded-md cursor-pointer bg-gray-400'
                                onClick={subscribeUser}>
                                <p className=' text-white font-bold '>
                                    Вы подписаны
                                </p>

                                <img 
                                    src='/img/completed-icon.png'
                                    className='w-[15px] h-[15px]'/>
                            </button>
                            :
                            <button 
                                className='p-5 w-[170px] h-[40px] flex justify-center items-center rounded-md text-white font-bold cursor-pointer'
                                style={{ background: "#4900a2e5"}}
                                onClick={subscribeUser}>
                                Подписаться
                            </button>
                        }

                        <button 
                            className='p-5 w-[240px] h-[40px] flex justify-center items-center rounded-md text-white font-bold bg-gray-400 cursor-pointer'
                            onClick={() => navigate(`/chat/${id}`)}>
                            Отправить сообщение
                        </button>
                    </div>
                </div>

        </section>

    </>
  )
}

export default UserProfile