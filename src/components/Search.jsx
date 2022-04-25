import React from 'react'
import {Ri24HoursFill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

export default function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Luxury included vacations for two people</h2>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, omnis quia in nisi esse iure odit corporis quos iusto aliquam molestiae labore provident voluptas commodi. Facilis qui voluptate repellendus iste.
            Excepturi impedit quidem animi rerum recusandae nam dolorum eos, ullam provident reiciendis a libero architecto autem dignissimos voluptate cum incidunt eaque maiores totam accusamus modi explicabo dolore optio esse! Aperiam?
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <Ri24HoursFill size={50} />
            </button>
            <div>
              <h3 className='py-2'>Leading service</h3>
              <p className='py-1'>All-inclusive company for 20 years in a row</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>Leading service</h3>
              <p className='py-1'>All-inclusive company for 20 years in a row</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border text-center '>
          <p className='pt-2'>Get an additional 10% off</p>
          <p className='py-4'>12 hours left</p>
          <p className='bg-gray-800 text-gray-200 py-2'>Book Now and Safe</p>
        </div>
        <form className='w-full '>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>grande antigua</option>
              <option>key west</option>
              <option>maldives</option>
              <option>cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>Check in</label>
            <input type="date" className='border rounded-md p-2' />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check out</label>
            <input type="date" className='border rounded-md p-2' />
          </div>
          <button className='w-full'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  )
}
