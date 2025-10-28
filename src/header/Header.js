import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Header-Style.css";
import { searchUserHost } from "../Hosts.js"

function Header({ currentUser }) {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const toRegister = () => {
        localStorage.removeItem("current-user");
        navigate('/login');
    };

    const searchUserFunc = async(value) => {

            if(!value || !currentUser) {
                setUsers([]);
                return;
            };

            try {
                const res = await axios.get( searchUserHost, {
                    params: { username: value }
                });

                if(res) {
                    setUsers(
                        (res.data.users || []).filter(user => user._id !== currentUser?._id)
                    );
                };

            } catch(err) {
                console.error(err)
            };
    };

    return (
        <header className="pl-[20px] pr-[20px] z-100 fixed m-0 w-full h-[70px] bg-white flex items-center justify-between ">
            <button className="flex items-center cursor-pointer">
                <img 
                    src="/img/viver-logo.png"
                    className="w-[50px] h-[50px]"/>
                <h1 
                    className="font-bold text-[25px] tracking-[5px] ml-[-5px] max-md:hidden" 
                    style={{color: "#4900a2"}}>IVER</h1>
            </button>

            <div className='w-[40%] h-[200px] mt-[130px] flex flex-col items-center justify-center max-md:w-[85%]'>
                <form 
                    className="w-full translate-y-[15px] flex items-center justify-between rounded-md pl-3 pr-3 pt-2 pb-2" style={{background: "#f5f5f5"}}
                    onSubmit={evt => evt.preventDefault()}>
                    <input 
                        type="" 
                        placeholder="Поиск"
                        className="w-[90%] outline-none border-none"
                        onChange={(e) => {
                            e.preventDefault();
                            searchUserFunc(e.target.value);
                        }}/>

                        <button type="submit" 
                                className="cursor-pointer">
                            <img 
                                src="/img/search-icon.png"
                                className="w-[15px] h-[15px]"/>
                        </button>
                </form>

                <div 
                    id="search__users-bar" 
                    className='w-full h-[300px] translate-y-[30px] flex flex-col overflow-y-scroll'>
                    
                    {users.length > 0 && users.map((u, i) => (
                         <div 
                            key={i} 
                            className='w-full h-[50px] relative pl-2 flex gap-2 items-center bg-gray-100 cursor-pointer'
                            onClick={() => navigate(`/user/${u._id}`)}>

                            <span className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                                <img 
                                    src={u.avatar ? u.avatar : "/img/user-avatar-img.jpg"} 
                                    className='w-full h-full object-cover'/>
                            </span>

                            <p className='text-sm'>
                                {u.username}
                            </p>

                        </div>
                    ))}

                </div>
            </div>

            <div className="flex gap-[20px]  max-md:hidden">
                <button className="cursor-pointer">
                    <img src="/img/notification-icon.png" 
                        className="w-[20px] h-[20px]"/>
                </button>

                <button 
                    className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden"
                    onClick={toRegister}>
                        <img src="/img/user-avatar-img.jpg"/>
                </button>
            </div>
        </header>
    )
}

export default Header