import React from 'react'
import './signup.css'
import FormSignUp from '../components/form-signup/form-signup'

export default function SignUp() {
    return (
        <div className="container flex min-h-screen flex-row items-center justify-center m-auto">
          <section className='primera bg-rose-50 bg-opacity-90' style={{ zIndex: 2 }}>
            <FormSignUp/>
          </section>
          <section className="min-h-screen bg-rose-200 grid bg-opacity-80" style={{ zIndex: 1 }}>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='title title-con-efecto mostrar'>Fashion Like</h1>
              <h2 className='sub_title texto-con-efecto font-semibold'>Choose the next trends</h2>
            </div>
          </section>
        </div>
      )
}
