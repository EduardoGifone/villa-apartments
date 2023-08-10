import React from 'react'
import {
    WifiIcon,
    DeviceTabletIcon,
    CakeIcon,
    FireIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/VillaGrande/photo01.jpg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Villa Sante's</h1>
                <p className='text-2xl'>¡Ven y vive una experiencia inolvidable en el corazón de Cusco!</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'><a href='https://airbnb.com/h/villasantesapartment' target='_blank' rel='noreferrer'>Más detalles!</a></button>
            </div>
            <div>
                <img className='w-full rounded-xl' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Servicios Destacados</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><WifiIcon className='mr-1 h-6 text-yellow-600' /> Wifi Rápido</p>
                    <p className='flex px-4 py-2 text-slate-500'><CakeIcon className='mr-1 h-6 text-yellow-600' /> Cocina</p>
                    <p className='flex px-4 py-2 text-slate-500'><FireIcon className='mr-1 h-6 text-yellow-600' /> Agua Caliente</p>
                    <p className='flex px-4 py-2 text-slate-500'><DeviceTabletIcon className='mr-1 h-6 text-yellow-600' /> Smart TV</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero