import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'
import Main from '../main/Main'

function Page() {
  const [currentUser, setCurrentUser] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("current-user")) {
      navigate('/');
      setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
    } else {
      navigate('/login')
    }
  }, []);

  return (
    <>
        <Header currentUser={currentUser}/>
        <Main/>
    </>
  )
}

export default Page