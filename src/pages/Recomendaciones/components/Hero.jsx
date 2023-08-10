

import bgImg from '../assets/machu-picchu.jpg'

const Hero = () => {
  return (
    // <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
    //     <div className=' max-w-[1240px] m-auto'>
    //         <h1 className='py-3 text-5xl md:text-7xl font-bold'>Recomendaciones</h1>
    //         <p className='text-2xl'>La sección a continuación te ofrece valiosas recomendaciones para aprovechar al máximo tu estancia. Te sugerimos explorar los diversos lugares para comer y sumergirte en la riqueza gastronómica local. Además, no te pierdas la oportunidad de visitar los puntos de interés más destacados de la zona.<br/><br/>Si estás buscando actividades emocionantes y entretenimiento, aquí encontrarás opciones para satisfacer tus intereses. Sin embargo, si deseas una experiencia más profunda y detallada, te recomendamos considerar la asistencia de agencias de turismo locales. Ellos cuentan con conocimientos especializados y pueden ayudarte a crear una experiencia enriquecedora y sin complicaciones.</p>
    //     </div>
    // </div>
    <div name='home' className='w-full h-screen'>
        <div className='w-full h-screen bg-gray-800/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
        </div>
      
        <div className='flex flex-col gap-5 text-white relative max-w-[1240px] m-auto pt-72 max-md:pt-56 px-5'>
            <h1 className='text-5xl max-md:text-4xl font-bold text-white'>Recomendaciones</h1>
            <p className='text-2xl max-md:text-xl text-justify text-white'>La sección a continuación te ofrece valiosas recomendaciones para aprovechar al máximo tu estancia. Te sugerimos explorar los diversos lugares para comer y sumergirte en la riqueza gastronómica local. Además, no te pierdas la oportunidad de visitar los puntos de interés más destacados de la zona.<br/><br/>Si estás buscando actividades emocionantes y entretenimiento, aquí encontrarás opciones para satisfacer tus intereses. Sin embargo, si deseas una experiencia más profunda y detallada, te recomendamos considerar la asistencia de agencias de turismo locales. Ellos cuentan con conocimientos especializados y pueden ayudarte a crear una experiencia enriquecedora y sin complicaciones.</p>
        </div>
    </div>
  )
}

export default Hero