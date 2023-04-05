import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Base from './base';


export default function Login()  
{
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[error,seterror]=useState(false)

    const handleError=(e)=>{
        e.preventDefault();
        if(email.length ===0 || password.length ===0 )
        {
            seterror(true)
        }
        if(email && password)
        {
            console.log(" email => " +email)
            console.log("password => "+password)
            alert("your are successfully logined")
        }
    }
  return (
    <div id='W'>
    <Base/>
        <form onSubmit={handleError}> 
        <br></br><br></br><br></br><br/>
        Enter the email: <input type='email' variant="outlined" placeholder='E-MAIL' onChange={(e)=>setemail(e.target.value)}/>
        <br></br><br></br>
        {error && email.length ===0 ? alert("Please Enter The email"): ""}
        Enter the password : <input type='password' variant="outlined" placeholder='PASSWORD' onChange={(e)=>setpassword(e.target.value)}/>
        <br></br><br></br>
        {error && password.length ===0 ? alert("Please Enter The password"): ""}
        <Button type='submit' variant="contained">submit</Button><br/><br/>
        
        <h6>DO NOT HAVE AN ACCOUNT SIGNUP</h6>
        </form>
    </div>
  )
}
