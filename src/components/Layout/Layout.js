import React from 'react';
import Navbar from '../../components/Layout/Navbar/Navbar';
import { Route , Redirect } from "react-router-dom";
 import Login from '../Layout/Login/Login';
import Editor from '../Layout/Editor/Editor';
const layout = () => {
  return (
    <div>
        <Navbar />
        <Redirect from="/" to="/home" />
        <Route path="/home" exact component={Login}/>
        <Route path="/loggedin" exact component={Editor}/>
    </div>
  )
}


export default layout;