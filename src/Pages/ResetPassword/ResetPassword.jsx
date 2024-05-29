import React, { useState } from 'react'
import "./ResetPasswordStyle.css"
import { useParams } from 'react-router'

const ResetPassword = () => {
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()
  const {id, token} = useParams()

// console.log(password, confirmpassword)

const ResetPassword = async (event) => {
    event.preventDefault();
  
    const data = {password,confirmpassword}
  
    console.log(data);


    const Url = `https://experttrades-new-back-end.vercel.app/api/resetPassword/${id}/${token}`

    fetch(Url, {data},{
        method: "POST",
    })
    .then(response=> response.json())
      .then(response => {
        console.log(response) 
        alert(response.message)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 return (
    <div className='MainBody'>
        <div className='HeaderBox'>
            <h5>New Password</h5>
        </div>
        
        <div className='FromBody'>
            <div className='FromBodyWrapper'>
                <span>To recover your account please provide your new password.</span>

                <div className='From'>
                    <label>New Password</label>
                    <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
                    <label>New Password</label>
                    <input type="password"  onChange={(e)=> setConfirmpassword(e.target.value)}/>

                    <button onClick={ResetPassword}>Submit</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ResetPassword