import React from 'react'
import beachVid from '../assets/beachVid.mp4'

export default function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay muted loop />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
            <h1>First class Travel</h1>
            <h2>Top 1% Locations worldwide</h2>
        </div>
    </div>
  )
}
