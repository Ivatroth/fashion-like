import React from 'react'
import './login.css'
import FormLogin from '../components/form-login/form-login'

export default function Login() {

  return (
    <div className="container m-auto flex min-h-screen flex-row items-center justify-center text-white">
      <section className="primera min-h-screen bg-rose-200 grid bg-opacity-80">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='title title-con-efecto mostrar'>Fashion Like</h1>
          <h2 className='sub_title texto-con-efecto font-semibold'>Choose the next trends</h2>
        </div>
      </section>
      <section className='segunda bg-rose-50 bg-opacity-90'>
        <FormLogin/>
      </section>
      {/* <section className='tercera bg-black min-h-screen'>cvcxvxcvvx</section> */}
    </div>
  )
}
