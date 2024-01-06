import React, { useEffect } from 'react';
import './App.css';
// import SignUpForm from './pages/auth/signup/SignUpForm';
import Auth from './Routs/Auth';
import Protected from './Routs/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function App() {

  const navi = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe =  auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged In
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout())
        navi('/')

      }
    });

    return unsubscribe;
  }, [dispatch]);



  return (
    <div className="App">
      {/* <LoginForm /> */}
{user ? <Protected /> : <Auth /> }

    </div>
  );
}

export default App;
