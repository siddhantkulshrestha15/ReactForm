import React, { useState } from 'react'
import './Form.css'

function Form() {
  const data = {name:"", email:"", password:""};
  const[userdata, setUserdata] = useState(data);
  const[flag, setFlag] = useState(false);
  function cHandler(e){
    setUserdata({...userdata, [e.target.name]:e.target.value})
  }
  function submitHandler(e){
    e.preventDefault();
    if(!userdata.name || !userdata.email || !userdata.password){
      alert("All fields are mandatory")
    }
    else
    {
      setFlag(true);
    }
  }
  return (
    <div>
      
    <pre>{(flag)?<h2>Hi {userdata.name} you have succesfully registered</h2>:""}</pre>
      <form action="" onSubmit={submitHandler}>
        <div>
          <div className="box">
            <div className="heady">
              <h1>Registration Form</h1>
            </div>
            <div className="inpy">
              <input type="text" name='name' value={userdata.name} onChange={cHandler} className='intheinp' placeholder='Enter Your Name' />
              <input type="text" name='email' value={userdata.email} onChange={cHandler} className='intheinp' placeholder='Enter Your Email' />
              <input type="text" name='password' value={userdata.password} onChange={cHandler} className='intheinp' placeholder='Enter Password' />
            </div>
            <div className="register">
              <button type='submit'>Register</button>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
