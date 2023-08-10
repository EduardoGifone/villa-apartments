import { Link as Linkk} from 'react-router-dom'

import GrandeImg from '../assets/photo01.jpg'
import MiniImg from '../assets/photo02.jpg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen max-md:h-auto max-md:pt-40 bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto gap-10'>
            <div className='flex flex-col'>
              <div>
                  <img className='w-full rounded-xl' src={GrandeImg} alt="/" />
              </div>
              <div className='flex flex-col'>
                  <h1 className='py-3 text-5xl font-bold text-center'>Villa Sante's</h1>
                  <Linkk className='text-center' to={'/VillaGrande'} ><button className='w-full py-3'>Más info</button></Linkk>
              </div>
            </div>

            <div className='flex flex-col'>
              <div>
                  <img className='w-full rounded-xl' src={MiniImg} alt="/" />
              </div>
              <div className='flex flex-col'>
                  <h1 className='py-3 text-5xl font-bold text-center'>Villa Mini</h1>
                  <Linkk className='text-center' to={'/VillaMini'} ><button className='w-full py-3'>Más info</button></Linkk>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero