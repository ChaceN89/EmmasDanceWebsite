import React from 'react'

export default function Home() {
  return (
    <div className='min-h-screen'>
      Home
      <img src={process.env.PUBLIC_URL + '/images/TestLogo.jpg'} className='h-screen flex justify-center' alt="..."/>
    </div>
  )
}
