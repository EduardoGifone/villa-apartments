
import salaImg from '../assets/VillaGrande/photo02.jpg'
import cocinaImg from '../assets/VillaGrande/photo04.jpg'
import comedorImg from '../assets/VillaGrande/photo03.jpg'
import habi01Img from '../assets/VillaGrande/photo06.jpg'
import habi02Img from '../assets/VillaGrande/photo07.jpg'
import habi03Img from '../assets/VillaGrande/photo08.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={salaImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h3 className='text-5xl font-bold py-6 text-center'>Contarás con anfitriones amables</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>En nuestro departamento de Airbnb, te recibirán anfitriones amables que estarán aquí para hacer de tu estadía una experiencia genial. ¡Esperamos verte pronto!</p>
          </div>

          <h3 className='text-5xl font-bold py-6 text-center'>Ambientes con los que contarás</h3>

          <div className='grid relative gap-x-8 gap-y-10 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={salaImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Sala</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>¡Relájate y disfruta al máximo en nuestra sala equipada! Hemos preparado para ti un televisor smart que incluye cuentas de Netflix y acceso a YouTube, para que puedas sumergirte en tus series y videos favoritos. Además, no te perderás de ninguna novedad local gracias a la opción de cable go, que te brinda acceso a canales locales. Tu entretenimiento está asegurado.</p>
                  </div>
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={cocinaImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Cocina</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Aquí, te brindamos todas las herramientas necesarias para explorar tus talentos culinarios. Desde ollas y platos hasta copas de vino, nuestra cocina está lista para convertirse en tu espacio creativo. No importa si eres un cocinero experimentado o estás empezando, encontrarás todo lo que necesitas para preparar deliciosas comidas y compartir momentos memorables. ¡Disfruta cada experiencia culinaria en nuestra cocina diseñada pensando en ti!.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={comedorImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Comedor</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>En este espacio, te invitamos a compartir comidas y risas alrededor de una mesa pensada para reunir a hasta seis personas. Ya sea para desayunar juntos antes de un emocionante día de exploración o para disfrutar de una cena relajada después de aventuras emocionantes, nuestro comedor es el lugar perfecto para fortalecer lazos y crear recuerdos duraderos.<br/> Imagínate charlando, compartiendo historias y saboreando deliciosos platillos en un ambiente diseñado con calidez y comodidad en mente. Permita que el comedor sea el escenario de tus reuniones más especiales y momentos de conexión.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={habi01Img} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Habitacion principal</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Ingresa a nuestra elegante habitación principal, un rincón de lujo y comodidad diseñado para ti. Descansa en una cama king size que garantiza un sueño excepcional y aprovecha el baño privado para una relajación absoluta. Además, una Smart TV con acceso a Netflix está lista para satisfacer tus necesidades de entretenimiento. Y no olvides el amplio guardarropa que te espera, listo para acomodar tus pertenencias con comodidad y estilo. Tu refugio perfecto te aguarda.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={habi02Img} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Habitacion secundaria 1</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Aquí encontrarás una cómoda cama de 2 plazas, ideal para un descanso tranquilo y reparador. Además, hemos proporcionado un colgador de ropa para mantener tus prendas organizadas y listas para usar. ¿Necesitas un lugar para trabajar o estudiar? Un pequeño escritorio está disponible para que puedas concentrarte en tus tareas con comodidad.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-xs' src={habi03Img} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Habitacion secundaria 2</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Esta habitación te ofrece una cómoda cama de 2 plazas, perfecta para un descanso reparador. Además, hemos dispuesto un colgador de ropa para mantener tus prendas organizadas y al alcance. Pero la característica especial aquí es el entretenimiento. Te proporcionamos un Smart TV que te permite acceder a tus programas favoritos, explorar contenido en línea y sumergirte en tus películas y series preferidas. </p>
                  </div>
              </div>

          </div>
      </div>
  </div>
  );
};

export default Support;
