'use client'

import React, { useState } from "react";
import {Button} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Link from 'next/link';
import axios from "axios";


export default function FormSignUp() {
  const [user, setUser] = useState({})
  
  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUser({
      username: event.target.username.value,
      email: event.target.email.value,
      pass: event.target.password.value
    })

  const userdat = (await axios.post(`http://localhost:3000/api/user`, user)).data
  if(!userdat) alert('Hubo algun problema')
  else  alert('Registrado con exito')
//! redireccionar a login


}
  return (
    <form action="" onSubmit={handleSignup}>
      <div className="flex w-3/4 gap-8 flex-col m-auto items-center justify-center mt-16"> 
          <h3 className="text-gray-600 sub_title">Enter your details</h3>
          <Input id="username" type="text" variant="underlined" label="Name" placeholder="Enter your User Name" />  
          <Input id="email" type="email" variant="underlined" label="Email" placeholder="Enter your email" />
          <Input id="password" type="password" variant="underlined" label="Password" placeholder="Enter your password" />
          <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-800 from-pink-300 text-gray-600 shadow-lg">
            Sign Up
          </Button>
          <Link href="/"><p className='text-sm text-blue-700 mt-3'>Sign In</p></Link>
      </div>

    </form>
  );
}