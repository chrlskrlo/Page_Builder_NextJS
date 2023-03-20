import React from 'react'
import Image from 'next/image'
import SaasImg from '../assets/image/saas.png'
import {GiPlayButton} from 'react-icons/gi'
import Cards from './Cards'

const Hero = () => {
  return (
    <div className='h-screen w-full py-24'>
        <div className='container mx-auto grid md:grid-cols-2'>
         <div className='flex flex-col justify-center'>
            <p className='text-[#82039A]'>Help all startups</p>
            <h1 className='text-7xl font-bold font-sans pt-6'>Simple Technology for Complex Task</h1>
            <p className='pt-16 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ducimus! Odio ipsa rerum natus atque accusantium reprehenderit et expedita cupiditate?.
            </p>
            <div className='flex pt-10 gap-2'>
            <button className='bg-[#82039A] rounded-lg px-8 py-3 text-white font-bold'>Free Trial</button>
            <button className='flex justify-center items-center px-2 py-2 text-[#82039A] hover:border-2 border-[#82039A] rounded'> <GiPlayButton className='rounded text-' size={18} />Watch video</button>
            </div>
         </div>
         <Image 
         src={SaasImg} 
         unoptimized={true}
         className='w-500px mx-auto py-4'
          />
        </div>
        <div className='py-20'>
        <Cards />
        </div>
        
    </div>
  )
}

export default Hero