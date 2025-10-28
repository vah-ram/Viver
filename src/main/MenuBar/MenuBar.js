import React from 'react'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <section className="fixed left-0 top-[70px] w-[220px] h-full bg-white text-black z-[100] max-md:hidden">
        <ul className="flex flex-col pt-5 gap-3 font-bold">
          
          <Link to='/'>
            <li className="flex items-center gap-2 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <img src='/img/home.png' className='w-[20px] h-[20px]'/> 
                    <p>Главная</p>
            </li>
          </Link>

          <Link to='/chat'>
            <li className="flex items-center gap-3 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <img src='/img/message.png' className='w-[20px] h-[20px]'/> 
                    <p>Сообщения</p>
            </li>
          </Link>

          <Link to='/notifications'>
            <li className="flex items-center gap-3 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <img src='/img/notification-menu-icon.png' className='w-[20px] h-[20px]'/> 
                    <p>Уведомления</p>
            </li>
          </Link>

          <Link to='/reels'>
            <li className="flex items-center gap-3 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <img src='/img/reels.png' className='w-[20px] h-[20px]'/> 
                    <p>Reels</p>
            </li>
          </Link>

          <Link to='/my-profile'>
            <li className="flex items-center gap-3 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <div className='w-[25px] h-[25px] rounded-full overflow-hidden'>
                    <img 
                        src='/img/user-avatar-img.jpg' 
                        className='w-full h-full object-cover'/> 
                </div>
                    <p>Профиль</p>
            </li>
          </Link>

          <Link to='/settings'>
            <li className="flex items-center gap-3 pl-10 py-3 hover:opacity-70 cursor-pointer">
                <img src='/img/setting.png' className='w-[20px] h-[20px]'/> 
                    <p>Настройки</p>
            </li>
          </Link>
        </ul>
    </section>
  )
}

export default MenuBar