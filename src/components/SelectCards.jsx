import React from 'react'


export default function SelectCards({bg, text}) {
  return (
    <div className='relative '>
            <img src={bg} alt="/" className='w-full h-full object-cover' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full '>
                <p className='left-4 bottom-4 text-2xl text-white font-bold'>{text}</p>
            </div>
    </div>
  )
}
