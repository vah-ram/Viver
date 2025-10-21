import './App.css';
import Page from './Home/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './registration/Register';
import Login from './registration/Login';
import UserProfile from './UserProfile/UserProfile';
import MyProfile from './MyProfile/MyProfile';
import { useState, useEffect } from 'react';
import Message from './Messages/Message';


function App() {
      const [ currentUser, setCurrentUser ] = useState(''); 

      useEffect(() => {
          if(localStorage.getItem("current-user")) {
            setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
          }
        }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/user/:id' element={<UserProfile currentUser={currentUser}/>}/>
          <Route path='/chat' element={<Message currentUser={currentUser}/>}/>
          <Route path='/chat/:id' element={<Message currentUser={currentUser}/>}/>
          <Route path='/my-profile' element={<MyProfile currentUser={currentUser}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
