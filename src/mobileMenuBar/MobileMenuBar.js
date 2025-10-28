import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenuBar() {
  return (
    <section className="fixed hidden bottom-0 w-full h-[70px] bg-white text-black z-[100] max-md:block ">
        <ul className="w-full flex flex-row justify-between items-center p-5 font-bold bg-white">
          
          <Link to='/'>
            <li className="flex items-center gap-2  hover:opacity-70 cursor-pointer">
                <img src='/img/home.png' className='w-[25px] h-[25px]'/> 
            </li>
          </Link>

          <Link to='/chat'>
            <li className="flex items-center gap-3  hover:opacity-70 cursor-pointer">
                <img src='/img/message.png' className='w-[25px] h-[25px]'/> 
            </li>
          </Link>

          <Link to='/notifications'>
            <li className="flex items-center gap-3  hover:opacity-70 cursor-pointer">
                <img src='/img/notification-menu-icon.png' className='w-[25px] h-[25px]'/> 
            </li>
          </Link>

          <Link to='/reels'>
            <li className="flex items-center gap-3  hover:opacity-70 cursor-pointer">
                <img src='/img/reels.png' className='w-[25px] h-[25px]'/> 
            </li>
          </Link>

          <Link to='/my-profile'>
            <li className="flex items-center gap-3  hover:opacity-70 cursor-pointer">
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                    <img 
                        src='/img/user-avatar-img.jpg' 
                        className='w-full h-full object-cover'/> 
                </div>
            </li>
          </Link>

        </ul>
    </section>
  )
}

export default MobileMenuBar