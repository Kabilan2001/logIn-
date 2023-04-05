import React from 'react'
import Base from './base'
import { Button } from '@mui/material'


export default function SIGNUP() {
  const handle=(e)=>
  {
    e.preventDefault();
    alert("successfully Registered");
  }
  return (
    <div  id='g'>
     <Base/>
     <form onSubmit={handle}>
    <h1>REGISTRATION FORM:</h1>
    <label>Enter the name</label><input type="text" placeholder="enter the name"></input><br></br><br></br>
   <label>Enter the age</label> <input  type="number" placeholder="enter the age"></input><br></br><br></br>
   
    <label>Date of birth           :</label><input type="date" placeholder="dd-mm-yyyy"></input><br></br><br></br>
    <label>Enter the email        :</label><input type="email" placeholder="enter the email"></input><br></br><br></br>
    <label>Enter the mobile number:</label><input type="text" placeholder='enter the mobilenumber'></input><br></br><br></br>
    <div>
    
<label>GENDER</label>
<br></br><br></br><br></br>
 <input type="radio" name="Gender" value="Male" />Male<br></br>
 <input type="radio" name="Gender" value="Female" />Female<br></br>
</div>
<br></br><br></br><br></br><br></br>
<label>select the city</label><br></br>
<select name="city">
<option value=" "></option>
<option value="chennai">CHENNAI</option>
<option value="delhi">COIMBATORE</option>
<option value="mumbai">NELLAI</option>
<option value="mumbai">THIRUCHI</option>
<option value="mumbai">NAMAKKAL</option>
<option value="mumbai">SALEM</option>
</select>
<br></br><br></br><br></br>
<Button type='submit' variant="contained">submit</Button>

</form>
    </div>
  )
}