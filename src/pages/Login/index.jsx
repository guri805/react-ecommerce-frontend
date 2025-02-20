import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [formField, setFormField] = useState({
    email: "",
    password: ""
  })
  const context = useContext(AppContext);
  const history = useNavigate();
  const forgotPassword = () => {
    context.openAlertBox("success","OTP send")
    history("/verify")
  }
  return (
    <section className='loginSection py-10'>
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10 flex flex-col gap-4">
          <h3 className='text-center text-lg text-black font-semibold'>Login To Your Account</h3>
          <form className='w-full flex flex-col gap-4'>
            <div className="form-group w-full ">
              <TextField type='email' id="email" label="Email Id*" variant="outlined"
                name="email" className='w-full' />
            </div>
            <div className="form-group w-full relative">
              <TextField type={!isShowPassword ? "password" : "text"} id="password" label="Password*"
                name="password" variant="outlined" className='w-full' />
              <Button type='submit' className='!absolute !top-3 !right-2 !rounded-full !w-[35px] !h-[30px] !min-w-[35px] text-black z-50' onClick={() => setIsShowPassword(!isShowPassword)}>
                {
                  isShowPassword ? (<IoEyeOff className='text-[23px] text-black opacity-75' />) : (<IoEye className='text-[23px] text-black opacity-75' />)
                }
              </Button>
            </div>

            <Link to="/verify" className='link cursor-pointer text-sm font-medium' onClick={forgotPassword}>Forgot Password?</Link>


            <div className="w-full">
              <Button className='
              !w-full !bg-red-500 !text-white'>Login</Button>
            </div>
          </form>
          <p className='signuplink text-center '>Not Registered? <Link className='font-semibold link' to={"/signup"}>Sign Up</Link></p>
          <p className='text text-center mt-[-5px]'>Or continue with social account</p>
          <Button className='flex gap-3 items-center !w-full !bg-[#f1f1f1] !mt-[-12px] !text-black'><FcGoogle className='text-[27px]' /> Login with Google</Button>
        </div>
      </div>
    </section >
  )
}

export default Login
