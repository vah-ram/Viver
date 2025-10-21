import { useState, useRef, useEffect } from 'react'
import Header from '../header/Header'
import MenuBar from '../main/MenuBar/MenuBar'
import axios from 'axios'
import { getMyDataHost, addPictureAccountHost } from "../Hosts.js" 

function MyProfile({ currentUser }) {
    const [ myData, setMyData ] = useState('');

    const fileRef = useRef(null);

    const clickFileChange = () => {
        fileRef.current.click();
    };

    useEffect(() => {
        if (!currentUser?._id) return;

    const getMyData = async () => {
        try {
        const res = await axios.get( getMyDataHost, {
            params: { myId: currentUser._id },
        });

        if (res?.data) {
            setMyData(res.data);
        }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    getMyData();
    }, [currentUser]);

    const changeAvatar = async(evt) => {
        
        const file = evt.target.files[0];

        if(file) {
            const imageUrl = URL.createObjectURL(file);

            await axios.post( addPictureAccountHost, {
                myId: currentUser._id,
                img: imageUrl
            });
        }
    };

  return (
    <>
        <Header/>
        <MenuBar/>
        
        <section 
            className='translate-y-[70px] ml-[220px] flex gap-[30px] h-[100vh] bg-[#f1f1f1c2] flex flex-col pt-5 items-center  rounded-tl-[30px]'
            style={{ width: "calc(100%-220px)" }}>
                <div className='w-auto h-auto flex flex-col pt-20'>
                    <div className='w-full h-full flex flex-row gap-[30px] justify-center'>
                        <input 
                            type='file'
                            ref={fileRef}
                            className="hidden"
                            accept="image/*"
                            onChange={changeAvatar}/>

                        <div 
                            className='w-[180px] h-[180px] rounded-full overflow-hidden cursor-pointer' 
                            onClick={clickFileChange}
                            style={{ background: `url("/img/user-avatar-img.jpg") center center / cover no-repeat`}}></div>

                        <div className='w-[50%] flex flex-col pt-5 '>
                            <h2 className='text-lg font-bold'>
                                {currentUser?.username}
                            </h2>

                            <div className='flex flex-row gap-2 mt-4 text-sm'>
                                <span>
                                    0 публикаций
                                </span>

                                <span>
                                    0 подписчиков
                                </span>

                                <span>
                                    0 подписка
                                </span>
                            </div>

                            <p className='w-[70%] mt-4'>
                                Transforming homes with smart pool & massage tubs-where every day feels like a vacation.
                            </p>
                        </div>
                    </div>

                    <button className='p-5 w-[240px] h-[40px] flex justify-center items-center rounded-md text-white font-bold bg-gray-400 cursor-pointer'>
                        Редактировать профиль
                    </button>
                </div>

        </section>

    </>
  )
}

export default MyProfile