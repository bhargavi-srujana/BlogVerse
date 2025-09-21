import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';


const SignUp = () => {

  const [eye,setEye] = useState(false);
    const [eying,setEying] = useState(false);
    const [err,setErr] = useState('');
    const [su,setSu] = useState('');
    const [errr,setErrr] = useState(
      {
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    )
   
    function eyes(){
      setEye((eye)=>!eye)
    }
    function eyyy()
    {
      setEying((eying)=>!eying)
    } 

    const handleSubmit=(e)=>{
      e.preventDefault();

      let newError={}
        // if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword)
        // {
        //   setErr('Please fill all the fields')

        //   setSu('')
        // }
        // else if(formData.confirmPassword !== formData.password)
        // {
        //   setErr('Your passwords did not match')
        //   setSu('')
        // }
        // else
        // {
        //   setSu('Your account is created successfully')
        //   setErr('')
          // setFormData(
          //   {
          //     fullName:'',
          //     email:'',
          //     password:'',
          //     confirmPassword:''
          //   }
          // )
        // }
        
        if(!formData.fullName)
        {
          newError.fullName='Please enter your full name'
        }
        if(!formData.email)
        {
          newError.email='Please enter your email'
        }
        if(!formData.password)
        {
          newError.password='Please enter your password'
        }
        if(!formData.confirmPassword)
        {
          newError.confirmPassword='Please confirm your password'
        }
        else if(formData.confirmPassword !== formData.password)
        {
          newError.confirmPassword='Your passwords did not match'
        }
      
        if(Object.keys(newError).length > 0)
        {
          setErrr(newError);
        }
        else{
          setSu('Your accoutn has been created successfully')
        }
      }


    const [formData,setFormData] = useState(
      {
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
      }
    )
    function cha(e)
    {
      setFormData((formData)=>({...formData,[e.target.name]:e.target.value}))
      console.log({formData});
      setErr('')
      setSu('')
      
      setErrr((errr)=>
      ({...errr,[e.target.name]:''}))
    }

  return (
 
    <div>
      <NavBar/>
    <div className='flex  flex-col items-center mt-2 md:mt-10 gap-2 md:gap-5'>
      <h1 className='text-lg md:text-3xl text-blue-600 font-bold'>Join BlogVerse</h1>
      <p className='text-xs text-gray-600 md:text-xl text-center font-semibold'>Create your account and <br /> start your Blogging journey today</p>
      <form className='flex flex-col border-1 border-gray-300 w-[90%] md:w-1/2 p-5 md:p-8  md:py-7 items-center gap-3 md:gap-3 rounded-xl mt-3 mb-4 shadow-2xl '  onSubmit={handleSubmit}>
        <div className='w-[95%] '>
            <p className='text-sm md:text-md text-gray-700 font-semibold md:pb-3 pb-1'>Full Name</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md md:py-2 md:px-3 md:text-md text-xs py-1.5 px-1.5 focus:outline-none focus:border-black focus:border-1.8 duration-200' name="fullName" onChange={cha} type="text" placeholder='Enter your full name' value={formData.fullName}/>
            {errr.fullName && <p className='text-red-600'>{errr.fullName}</p>}
        </div>
        <div className='w-[95%] '>
            <p className='text-sm md:text-md text-gray-700 font-semibold md:pb-3 pb-1'>Email</p>
            <div className='relative '>
              <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md md:py-2 md:px-3 text-xs md:text-md  py-1.5 px-1.5 focus:outline-none focus:border-black md:pl-10 pl-6' type="email" placeholder='Enter your email'name="email" onChange={cha} value={formData.email}/>
              <Mail className='absolute top-2 md:top-2.5 left-2 opacity-50 w-[5%] h-[50%]'/>
            </div>
            {errr.email && <p className='text-red-600'>{errr.email}</p>}
            
        </div>
        <div className='w-[95%] '>
            <p className='md:text-md text-sm text-gray-700 font-semibold md:pb-3 pb-1'>Password</p>
            <div className='relative '>
              <input className=' border-1 border-gray-400 bg-gray-50 w-full h-[80%] rounded-md md:py-2 md:px-3 py-1.5 px-1.5 focus:outline-none text-xs md:text-md focus:border-black md:pl-10 pl-6' type={eye?"text":"password"}   placeholder='Enter your password ' name="password" onChange={cha} value={formData.password}/>
              <KeyRound className="absolute top-2.5 left-2 opacity-50 w-[5%] h-[50%] "/ >
              <p onClick={eyes}>{(eye==true)?<Eye className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>:<EyeOff className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>}
                
                
              </p>
              
            </div>
            {errr.password && <p className='text-red-600'>{errr.password}</p>}
            
            
        </div>
        <div className='w-[95%] '>
            <p className='md:text-md text-sm text-gray-700 font-semibold md:pb-3 pb-1'>Confirm Password</p>
            <div className='relative'>

              <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md md:py-2 md:px-3 px-1.5 py-1.5 focus:outline-none pl-6 md:pl-10 text-xs md:text-md focus:border-black' 
               placeholder='Confirm your password' type={eying?"text":"password"} name="confirmPassword" onChange={cha} value={formData.confirmPassword}/>
             <KeyRound className="absolute top-2 md:top-2.5 left-2 opacity-50 w-[5%] h-[50%]"/ >
             <p onClick={eyyy}>{(eying==true)?<Eye className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>:<EyeOff className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>}</p>
             
            </div>
            {errr.confirmPassword && <p className='text-red-600'>{errr.confirmPassword}</p>}
            
        </div>
        <div className='flex gap-2 border-1 border-gray-400 w-[90%] md:py-3 md:px-4 px-2 py-2 rounded-xl items-center justify-center mt-3'>
            <input type="checkbox" name='' className='w-5 h-5'/>
            <p className='text-xs md:text-md'>I agree to the Terms of Services and Privacy Policy</p>
        </div>
        {err && <p className='text-red-700'>{err}</p>}
        {su && <p className='text-green-700'>{su}</p>}
        <button className=' type="submit" w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-4 flex justify-center gap-1.5'>
          <CircleUser  /><p>Create Account</p></button>
        <div className='border-[0.5px] border-gray-400 w-[90%] mt-4'></div>
        <p className='text-gray-700 font-semibold md:text-md text-sm '>Already have an account? <Link to="/login" className='text-purple-700'>Sign in here</Link></p>
        <Link to="/" className='font-semibold text-gray-700 hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer duration:200'>Back to Home</Link>
      </form>
    </div>
    </div> 
    
  )
}

export default SignUp
