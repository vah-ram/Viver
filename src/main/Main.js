import React from 'react'
import MenuBar from './MenuBar/MenuBar'

function Main() {
    
  return (

    <div className='w-full h-full flex flex-col'>

    <MenuBar />

    <main 
        className="translate-y-[70px] ml-[220px] flex gap-[30px] h-auto bg-[#f1f1f1c2] rounded-tl-[30px]"
         style={{ width: "calc(100%-220px)" }}>

        <section className="mt-5 ml-5 h-full"
                 style={{ width: "calc(100% - 300px)"}}>
            <div className="p-5 flex gap-5 items-center
              rounded-[30px] w-full h-[150px] bg-white" name="stories div">

                <div className="cursor-pointer flex flex-col items-center">
                    <span 
                        className="w-[75px] h-[75px] text-white 
                        rounded-full flex justify-center items-center border-3 
                        border-purple-300"
                        style={{background: "#a066ff", fontSize: "30px"}}>+</span>
                    <p className="text-sm mt-2">Добавить историю</p>
                </div>

                <div className="cursor-pointer flex flex-col items-center">
                    <span 
                        className="w-[75px] h-[75px] flex items-center justify-center text-white 
                        rounded-full border-3 border-purple-300 overflow-hidden">
                            <img 
                                className='w-[95%] h-[95%] object-cover rounded-full'
                                src='/img/woman.jpg'/>
                        </span>
                    <p className="text-sm mt-2 font-bold opacity-70">Էլլա</p>
                </div>

                <div className="cursor-pointer flex flex-col items-center">
                    <span 
                        className="w-[75px] h-[75px] flex items-center justify-center text-white 
                        rounded-full border-3 border-purple-300 overflow-hidden">
                            <img 
                                className='w-[95%] h-[95%] object-cover rounded-full'
                                src='/img/woman.jpg'/>
                        </span>
                    <p className="text-sm mt-2 font-bold opacity-70">
                        Էլլա
                    </p>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col gap-2 mt-5" name="post">
                <div className='w-full h-auto bg-white flex flex-col p-5 rounded-[15px]'>
                    <div className='flex gap-2 cursor-pointer'>
                        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden'>
                            <img src='/img/woman.jpg' className='w-full h-full object-cover'/>
                        </div>

                        <span className='flex flex-col justify-center'>
                            <h2 className='text-sm'>Էլլա</h2>
                            <p className='text-sm opacity-70 flex items-center gap-2'>
                                3 минут назад 
                                <img src='/img/earth-icon.png' className='w-[15px] h-[15px]'/>
                            </p>
                        </span>
                    </div>

                    <p className='mt-2'>
                        Նոր օրը՝ նոր գաղափարներով, <br/>
                        Երբ սկսում ես մտածել ավելի մեծ, աշխարհը դառնում է ավելի հետաքրքիր տեղ։
                    </p>

                    <img src='/img/nature.jpg' className='mt-3 w-[80%] rounded-md'/>
                
                    <div className='w-full flex gap-5 mt-5'>
                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/like-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/comment-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/repost-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/send-icon.png"
                                className='w-full h-full'/>
                        </button>
                    </div>
                </div>

                <div className='w-full h-auto  bg-white flex flex-col p-5 rounded-[15px]'>
                    <div className='flex gap-2 cursor-pointer'>
                        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden'>
                            <img src='/img/ani-img.jpg' className='w-full h-full object-cover'/>
                        </div>

                        <span className='flex flex-col justify-center'>
                            <h2 className='text-sm'>Անի</h2>
                            <p className='text-sm opacity-70 flex items-center gap-2'>
                                3 минут назад 
                                <img src='/img/earth-icon.png' className='w-[15px] h-[15px]'/>
                            </p>
                        </span>
                    </div>

                    <p className='mt-2'>
                        Նոր օրը՝ նոր գաղափարներով, <br/>
                        Երբ սկսում ես մտածել ավելի մեծ, աշխարհը դառնում է ավելի հետաքրքիր տեղ։
                    </p>

                    <img src='/img/nature.jpg' className='mt-3 w-[80%] rounded-md'/>
                
                    <div className='w-full flex gap-5 mt-5'>
                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/like-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/comment-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/repost-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/send-icon.png"
                                className='w-full h-full'/>
                        </button>
                    </div>
                </div>

                <div className='w-full h-auto bg-white flex flex-col p-5 rounded-[15px]'>
                    <div className='flex gap-2 cursor-pointer'>
                        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden'>
                            <img src='/img/woman.jpg' className='w-full h-full object-cover'/>
                        </div>

                        <span className='flex flex-col justify-center'>
                            <h2 className='text-sm'>Էլլա</h2>
                            <p className='text-sm opacity-70 flex items-center gap-2'>
                                3 минут назад 
                                <img src='/img/earth-icon.png' className='w-[15px] h-[15px]'/>
                            </p>
                        </span>
                    </div>

                    <p className='mt-2'>
                        Նոր օրը՝ նոր գաղափարներով, <br/>
                        Երբ սկսում ես մտածել ավելի մեծ, աշխարհը դառնում է ավելի հետաքրքիր տեղ։
                    </p>

                    <img src='/img/nature.jpg' className='mt-3 w-[80%] rounded-md'/>

                    <div className='w-full flex gap-5 mt-5'>
                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/like-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/comment-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/repost-icon.png"
                                className='w-full h-full'/>
                        </button>

                        <button className='w-[24px] h-[24px] cursor-pointer'>
                            <img 
                                src="/img/send-icon.png"
                                className='w-full h-full'/>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-5 mr-3 w-[300px] h-full flex flex-col gap-4">
            <div className="w-full h-auto p-3 bg-white rounded-md">
                <h2 className="font-bold text-green-600">Друзья онлайн</h2>

                <ul className="flex-col mt-5">
                    <li className="list-none cursor-pointer">
                        <span className="flex gap-3 items-center hover:opacity-70">
                            <img 
                                src="/img/user-avatar-img.jpg" 
                                className="w-[35px] h-[35px] rounded-full"/>
                                <p className="font-md">Նարեկ Ղազանչյան</p>
                        </span>
                    </li>
                </ul>
            </div>

            <div className='w-full mr-5 h-auto p-3 bg-white rounded-md'>
                <h2  className='font-bold text-md'>
                    Рекомендованные люди
                </h2>

                <ul className="flex flex-col mt-5 gap-5">
                    <li className="list-none cursor-pointer">
                        <span className="flex gap-3 items-center hover:opacity-70">

                            <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                                <img 
                                    src="/img/ani-img.jpg" 
                                    className="w-full h-full object-cover"/>
                            </div>

                                <p className="text-sm -tracking-2e">Անի Հակոբյան</p>
                        </span>
                    </li>

                    <li className="list-none cursor-pointer">
                        <span className="flex gap-3 items-center hover:opacity-70">
                            
                            <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                                <img 
                                    src="/img/hayk-img.jpg" 
                                    className="w-full h-full object-cover"/>
                            </div>

                            <p className="text-sm -tracking-2e">Հայկ Սարգսյան</p>
                        </span>
                    </li>

                    <li className="list-none cursor-pointer">
                        <span className="flex gap-3 items-center hover:opacity-70">

                            <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                                <img 
                                    src="/img/karen-img.jpg" 
                                    className="w-full h-full object-cover"/>
                            </div>

                                <p className="text-sm -tracking-2e">Կարեն Նազարյան</p>
                        </span>
                    </li>
                </ul>
            </div>

        </section>
    </main>

    </div>
  )
}

export default Main