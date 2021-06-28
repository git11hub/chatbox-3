import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ChatBox from "./ChatBox";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() =>{
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        // user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })    
  }, [])

  return (
    <div className="App">
      {user ? <ChatBox /> : <Login />}
    </div>
  );
}

export default App;
