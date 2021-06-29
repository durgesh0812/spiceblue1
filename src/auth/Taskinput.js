import React,{useState} from 'react';
import "./Taskinput.css";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";


import { Button, Card, Container, Row } from "react-bootstrap";

import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'


function Taskinput() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch();

   

    
    return (
        <>
        {/* <div className="taskinput">
            <div  className="taskinput1">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="button" class="btn btn-success" >+</button>
         
           
            

            
     
        <div style={{width:"20%",marginLeft:"40%"}} > <DateRangePickerComponent placeholder="Enter date" ></DateRangePickerComponent></div>
         <div className="btns" style={{marginLeft:"710px",marginTop:"10px"}}>
         <button type="button" className="btn btn-success" style={{marginRight:"6px"}}>Save</button>
        <Link to="/"><button type="button" className="btn btn-warning" >Home</button></Link>

         </div>
        
          
         </div>
       
       </div> */}

<div class="card text-white bg-dark mb-3" style={{width:"30rem",marginTop:"20px"}}>
  
  <div class="card-body">
  <div  className="taskinput1"  >
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="button" class="btn btn-success" >+</button>
         
           
            

            
     
        <div style={{width:"20%",marginTop:"9px",marginLeft:"20%",display:"flex"}} > <DateRangePickerComponent placeholder="Enter date"  ></DateRangePickerComponent>
        <div class="dropdown" style={{width:"10px"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Assign user
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">User1</a>
    <a class="dropdown-item" href="#">User2</a>
    <a class="dropdown-item" href="#">User3</a>
  </div>
</div>
        </div>
         <div className="btns" style={{marginTop:"20px",justifyItems:"center"}}>
         <button type="button" className="btn btn-success"style={{marginLeft:"140px"}} >Save</button>
        <Link to="/"><button type="button" className="btn btn-warning" style={{marginLeft:"40px"}}>Home</button></Link>

         </div>
        
          
         </div>
  </div>
</div>
        </>
    )
}

export default Taskinput
