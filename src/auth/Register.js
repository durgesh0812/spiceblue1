import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';


function Register() {

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();



    const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
        const res=await axios.post(`https://spiceblue1.herokuapp.com/api/register`,{
            name:name,
            password:password,
        });
        console.log("registered user",res)
        toast.success("Registration success.Please login!")
        history.push("/login")

      }catch(err){
          console.log(err)
          if(err.response.status===400)toast.error(err.response.data)
      }
      
      
    }
   

   
   
    return (
        <div className="register__home">
           
           <div className="container-fluid bg-secondary p-5 text-center">
               <h2>REGISTRATION</h2>
           </div>
           
           <div className="container-fluid" style={{backgroundColor: "indigo",color:"white",height:"100vh",width:"100%"}}>
               <div className="row">
               <Link to="/"><button style={{marginTop:"10px",marginLeft:"10px"}} className="btn btn-success">Back to home</button></Link>
                   <div className="col-md-6 offset-md-3">

                   <form onSubmit={handleSubmit} className="mt-3">
                       <div className="form-group mb-3">
                          <label className="form-label">Your name</label>
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
           
           <button disabled={!name || !password}className="btn btn-success">submit</button>
        </form>
                      

                   </div>

               </div>

           </div>
         
            
        </div>
    )
}

export default Register;
