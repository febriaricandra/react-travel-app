import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectCards from './SelectCards'

export default function Select() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>

        <SelectCards bg={BoraBora} text='Bora Bora' />
        <SelectCards bg={BoraBora2} text='Bora Bora' />
        <SelectCards bg={Maldives} text='Maldives' />
        <SelectCards bg={Maldives2} text='Maldives' />
        <SelectCards bg={KeyWest} text='key west' />
        <SelectCards bg={Maldives} text='Maldives' />

    </div>
  )
}
