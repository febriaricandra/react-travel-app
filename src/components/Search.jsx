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
              <h3>Leading service</h3>
              <p>All-inclusive company for 20 years in a row</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3>Leading service</h3>
              <p>All-inclusive company for 20 years in a row</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>right</div>
    </div>
  )
}
