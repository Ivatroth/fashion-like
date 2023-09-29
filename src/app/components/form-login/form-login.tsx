'use client'
import React, { useState, useEffect } from "react";
import {Button} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/navigation'


export default function FormLogin() {
  const [error, setError] = useState('')
  const [data, setData] = useState({email:'',password:''})
  const router = useRouter()

  useEffect(()=>{
    return ()=>{ 
      setError('')
      setData({email:'',password:''})}
  },[])

  // cuando algun input cambie ejecutará esta funcion
  const handelChange = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    console.log(event.target.id);
    
    const value = event.target.value;
    const property = event.target.id;
    //se van agregando al estado local
    setData({...data, [property]: value });
   
  };


  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const pass = event.target.password.value;
    const user = (await axios.get(`http://localhost:3000/api/user?email=${data.email}&password=${data.password}`)).data
    
    if(user) {
      router.push('/profile')
    }     
    else setError('El usuario no existe')

  }

  return (
    <>
    <div disabled={ error ? true : false} className="text-red-800 bg-red-300 border-red-800 flex items-center justify-center">
      <h1>{error}</h1>
    </div>
    <form action="" onSubmit={handleLogin}>
      <div className="flex w-3/4 gap-8 flex-col m-auto items-center justify-center mt-16">          
          <Input value={data.email} id="email" type="email" variant="underlined" label="Email" placeholder="Enter your email" onChange={handelChange}/>
          <Input value={data.password} id="password" type="password" variant="underlined" label="Password" placeholder="Enter your password" onChange={handelChange}/>
          <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-800 from-pink-300 text-gray-600 shadow-lg">
            Sign In
          </Button>
          <Link href="/signup"><p className='text-sm text-blue-700 mt-3 '>Sign Up</p></Link>
      </div>
    </form>
    </>
  );
}
