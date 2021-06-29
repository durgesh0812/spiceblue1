import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Taskinput from './Taskinput';
import "./Task.css";

function Task() {
const {auth}=useSelector((state)=>({...state}))
const dispatch=useDispatch();
const history=useHistory();

const logout=()=>{
    dispatch({
        type:"LOGOUT",
        payload:null,
    })
    window.localStorage.removeItem("auth");
    history.push("/login")
}

    return (
        <>
        <div  className="tasks" style={{color:"white"}}>
            <nav class="navbar navbar-light bg-dark">
  <h3 class="navbar-brand" style={{color:"white"}}>Task</h3>
  <form class="form-inline">
   <p>Logged in as <span style={{color:"orange"}}>{auth.user.name}</span></p>
    {auth!==null &&(
        <a className='btn' onClick={logout} >
     <p className="logout">Logout</p>  
        </a>
       
    )}
    
  </form>
</nav>
</div>
<div className="tasksin">
<div > <Taskinput/></div>

</div>
        
         
        </>
    )
}

export default Task
