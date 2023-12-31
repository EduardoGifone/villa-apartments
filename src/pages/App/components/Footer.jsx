

import {
    FaFacebook,
    FaWhatsapp,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300 py-y px-2'>
    
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>Villa Apartments</p>
        <div className='flex justify-end sm:w-[300px] pt-4 text-2xl gap-10'>
            <FaFacebook />
            <FaWhatsapp />
        </div>
        </div>
    </div>
  )
}

export default Footer