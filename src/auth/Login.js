import React from 'react';
import {toast} from 'react-toastify';
import {useState} from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom"
function Login() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();

    const dispatch=useDispatch()

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log("login response",{name,password})
    try{
        const res=await axios.post(`https://spiceblue1.herokuapp.com/api/login`,{
            name:name,
            password:password,
           
        });
        if(res.data){
            console.log("save user in redux and local storage",res);
          //  console.log(res.data)

          window.localStorage.setItem('auth',JSON.stringify(res.data));
          dispatch({
              type:"LOGGED_IN_USER",
              payload:res.data,
          });
          history.push("/task")

        }
       
        toast.success("LOGIN SUCCESS!")
        // history.push("/login")

    }catch(err){
        console.log(err)
        if(err.response.status===400)toast.error(err.response.data)

    }
    }
    return (
        <div>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h1>LOGIN</h1></div>
      

            <div className="container-fluid" style={{backgroundColor: "indigo",color:"white",height:"100vh",width:"100%"}}>
              <Link to="/"><button style={{marginTop:"10px",marginLeft:"10px"}} className=" btn btn-success">Go back to Home</button></Link>
               <div className="row">
                   <div className="col-md-6 offset-md-3">
                   <form onSubmit={handleSubmit} className="mt-3">
                       <div className="form-group mb-3">
                          <label className="form-label" style={{marginBottom:"2px"}}>Your name</label>
                          <input type="text" className="form-control" placeholder="Enter ur name" 
                          value={name}
                          onChange={e=>setName(e.target.value)}/>
                       </div>

                       <div className="form-group  mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" className="form-control" placeholder="Enter ur password" 
                          value={password}
                          onChange={e=>setPassword(e.target.value)}/>
                       </div>
           
           <button disabled={!name || !password} className="btn btn-primary">submit</button>
        </form>
                      

                   </div>

               </div>

           </div>
           </div>
      
    )
}

export default Login
