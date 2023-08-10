import {useState} from 'react';
import { Link } from 'react-scroll'
import { Link as Linkk} from 'react-router-dom'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='cursor-pointer text-3xl font-bold mr-4 sm:text-4xl'><Linkk to={'/'} smooth={true} duration={500}>Villa Apartments</Linkk></h1>
        </div>
        <div className='hidden md:flex pr-4 gap-3'>
          {/* <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button> */}
          <Linkk to={'/VillaGrande'} ><button className='px-8 py-3'>Villa Grande</button></Linkk>
          <Linkk to={'/VillaMini'} ><button className='px-8 py-3'>Villa Mini</button></Linkk>
          <Linkk to={'/Recomendaciones'} ><button className='px-8 py-3'>Recomendaciones</button></Linkk>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <div className='flex flex-col my-4'>
            {/* <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button> */}
            <Linkk to={'/VillaGrande'} ><button className='px-8 py-3 mb-4'>Villa Grande</button></Linkk>
            <Linkk to={'/VillaMini'} ><button className='px-8 py-3 mb-4'>Villa Mini</button></Linkk>
            <Linkk to={'/Recomendaciones'} ><button className='px-8 py-3 mb-4'>Recomendaciones</button></Linkk>
          </div>
      </ul>
    </div>
  );
};

export default Navbar;
