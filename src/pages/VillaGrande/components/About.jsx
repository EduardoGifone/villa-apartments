import { GoogleMap } from "./GoogleMap"


const About = () => {
  
  const lat = -13.532968
  const lng = -71.963832

  return (
    <>
      <div name='about' className='w-full mt-32 mb-10 px-5'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h2 className='text-6xl font-bold'>A dónde irás</h2>
                  <p className='text-2xl py-6 text-gray-500 text-justify' >Nuestro departamento se encuentra en una zona apacible, donde podrás disfrutar de un ambiente sereno y relajante durante tu estancia. Descansa tranquilamente y recarga energías después de explorar las maravillas de la ciudad. Además, estarás cerca de atracciones turísticas y servicios, sin comprometer la paz y la tranquilidad. ¡Ven y experimenta la calma y serenidad en nuestro acogedor hogar!</p>
              </div>
          </div>
      </div>
      <GoogleMap className="h-96 max-md:h-56 max-w-[1240px] m-auto rounded-3xl overflow-hidden px-5"
      latitude={lat}
      longitude={lng}
      />
    </>
  )
}

export default About