 import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler=(e)=>{
      const name=e.target.name
      const value=e.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(e)=>{
      e.preventDefault()
      let newUrl=url
      if(currState==="login"){
        newUrl+="/api/user/login"
      }
      else{
        newUrl+="/api/user/register"
      }
      
      try {
        const response=await axios.post(newUrl,data)
  
        if(response.data.success){
           e.preventDefault()
           setToken(response.data.token)
           localStorage.setItem("token",response.data.token)
           setShowLogin(false)
  
        }
        else{
          alert(response.data.message)
        }
        
      } catch (error) {
        console.error('Error during authentication:', error);
        alert('An error occurred. Please try again.');
      }

    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-pop-up-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src ={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name'
            onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your email' required/>
            <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Your password' required/>
        </div>
        <button type="submit">{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-pop-up-condition">
            <input type="checkbox" required />
            <p>By continuing I agree to terms and conditions</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>{setCurrState("Sign Up")}}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>
        }
        


      </form>
    </div>
  )
}

export default LoginPopUp
