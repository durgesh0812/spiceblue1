import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    const {user}=useSelector((state)=>({...state}));
    return (
        <>
        <div>
            <nav class="navbar navbar-light bg-dark">
  <a class="navbar-brand"><h3  style={{marginTop:"7px",color:"white"}}>Task manager</h3></a>
  <form class="form-inline">
  <Link to="/register"  style={{ textDecoration: 'none' }}><p className="hov" style={{color:"white",marginRight:"10px"}}>Register</p></Link>
  <Link to="/login" style={{ textDecoration: 'none' }}><p className="hov"  style={{color:"white"}}>Login</p></Link>


  </form>
</nav>
             
          
        </div>
        
           <div className="content" > <h1  >Task updating app</h1></div></>

        
    )
}

export default Home
