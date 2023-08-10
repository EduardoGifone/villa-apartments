import { GoogleMap } from "./GoogleMap"


const About = () => {
  
  let lat = -71.963832
  let lng = -13.532968

  return (
    <>
      <div name='about' className='w-full my-32 px-5'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h2 className='text-6xl font-bold'>A dónde irás</h2>
                  <p className='text-2xl py-6 text-gray-500 text-justify' >Nuestro departamento se encuentra en una zona apacible, donde podrás disfrutar de un ambiente sereno y relajante durante tu estancia. Descansa tranquilamente y recarga energías después de explorar las maravillas de la ciudad. Además, estarás cerca de atracciones turísticas y servicios, sin comprometer la paz y la tranquilidad. ¡Ven y experimenta la calma y serenidad en nuestro acogedor hogar!</p>
              </div>
          </div>
      </div>
      {/* <GoogleMap className="my-3 -ml-5 h-[18rem] overflow-hidden rounded-xl md:hidden"
      latitude={lat}
      longitude={lng}
      /> */}
    </>
  )
}

export default About