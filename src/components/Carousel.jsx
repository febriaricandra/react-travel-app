import React,{useState} from 'react'
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import {BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
    }
]



function Carousel() {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () =>{
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () =>{
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-10 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill  onClick={prevSlide} className='absolute top-[50%] text-white cursor-pointer left-10' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-white cursor-pointer right-10' />
        {sliderData.map((item, index) => {
            return <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && <img className='w-full rounded-md' src={item.url} alt="/" />}
            </div>
        })}
    </div>
  )
}

export default Carousel