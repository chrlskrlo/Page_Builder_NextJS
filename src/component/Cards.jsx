import React from 'react'
import {HiOutlineLightningBolt} from 'react-icons/hi'
import {BsBox,BsBank} from 'react-icons/bs'
import {FaFeather} from 'react-icons/fa'
import {GiHolosphere} from 'react-icons/gi'
import {TbCircleTriangle} from 'react-icons/tb'


const Cards = () => {
    return (
        <div className='w-full h-24'>
            {/*Card container */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-6 gap-2 mx-auto container hover:ease-in-out duration-500 hover:cursor-pointer bg-gray-50'>
                {/*About Cards */}

                <div className='inline-flex flex-row rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <HiOutlineLightningBolt size={35}
                    />
                        <p className='text-2xl font-bold py-4'>BoltShift</p> 
                </div>

                <div className='inline-flex flex-row  rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <BsBox size={30}
                    />
                        <p className='text-2xl font-bold py-4 ml-2'>LightBox</p> 
                </div>

                <div className='inline-flex flex-row  rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <FaFeather size={30}
                    />
                        <p className='text-2xl font-bold py-4 ml-2'>FeatherDev</p> 
                </div>

                <div className='inline-flex flex-row  rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <GiHolosphere size={35}
                    />
                        <p className='text-2xl font-bold py-4 ml-2'>Spherule</p> 
                </div>

                <div className='inline-flex flex-row  rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <BsBank size={30}
                    />
                        <p className='text-2xl font-bold py-4 ml-2'>GlobalBank</p> 
                </div>

                <div className='inline-flex flex-row  rounded text-gray-400 justify-center text-center items-center shadow-lg'>
                    <TbCircleTriangle size={35}
                    />
                        <p className='text-2xl font-bold py-4 ml-2'>Nietzsche</p> 
                </div>
            </div>
        </div>



    )
}

export default Cards