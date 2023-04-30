import { useState } from 'react'
import Footer from './footer'
import logo from '../public/images/logo.svg'
import preview from '../public/images/illustration-dashboard.png'
import './App.css'


// TODO:
    // check accessibilty for form 

function App() {

  return (
    <div>
      <main>
      <img src={logo} className='logo' alt=''></img>
      <h1 className='sr-only'>Ping Coming Soon Page</h1>
      <h2>We are launching <strong>soon!</strong></h2>
      <p>Subscribe and get notified</p>
      <form>
        <label htmlFor='email' className='sr-only'>Please enter your email address</label>
        <input type='email' id='email' placeholder='Your email address...'></input>
        <label htmlFor='submitEmail' className='sr-only'>Submit Email</label>
        <button id='submitEmail'>Notify Me</button>
      </form>
      <img src={preview} className='preview' alt='dashboard for Ping, showing graphs, checkmarks and page layout'></img>
      </main>
      <Footer />
    </div>
  )
}

export default App
