import React from 'react'
import { BarLoader
 } from 'react-spinners'
const Loading = () => {
  return (
    <div className='text-center mx-auto mt-40'>
      <img src='./logo.png' className='h-52 w-52 m-auto' alt='logo'/>
      <h1 className='text-4xl '>Renu Sharma Healthcare & Education Foundation </h1>
      <p className='capitalize'>A new Vision of Nation</p>
      <BarLoader
      color="black"
      className='mx-auto'
      />
    </div>
  )
}

export default Loading
