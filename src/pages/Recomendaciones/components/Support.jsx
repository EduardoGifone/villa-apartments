import React from 'react';

// import salaImg from '../assets/VillaMini/photo02.jpg'
// import cocinaImg from '../assets/VillaMini/photo03.jpg'
// import comedorImg from '../assets/VillaMini/photo04.jpg'
// import habi01Img from '../assets/VillaMini/photo05.jpg'
// import habi02Img from '../assets/VillaMini/photo06.jpg'
// import habi03Img from '../assets/VillaMini/photo08.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        {/* <img className='w-full h-full object-cover mix-blend-overlay' src={salaImg} alt="/" /> */}
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h3 className='text-5xl font-bold py-6 text-center'>Contarás con anfitriones amables</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>En nuestro departamento de Airbnb, te recibirán anfitriones amables que estarán aquí para hacer de tu estadía una experiencia genial. ¡Esperamos verte pronto!</p>
          </div>

          <h3 className='text-5xl font-bold py-6 text-center'>Ambientes con los que contarás</h3>

          <div className='grid relative gap-x-8 gap-y-10 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        {/* <img className='rounded-xl max-w-xs' src={salaImg} alt="/" /> */}
                        <h3 className='font-bold text-2xl mt-2'>Sala</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>En este espacio íntimo, te ofrecemos la combinación perfecta de comodidad y entretenimiento. Nuestra sala está equipada con un moderno Smart TV que te brinda acceso directo a Netflix y también a una selección de canales locales a través de cable go. ¿Estás buscando una noche relajante viendo tus series y películas favoritas? ¿O tal vez deseas mantenerte al tanto de las noticias locales? Tú decides cómo aprovechar al máximo este rincón lleno de opciones.</p>
                  </div>
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        {/* <img className='rounded-xl max-w-xs' src={cocinaImg} alt="/" /> */}
                        <h3 className='font-bold text-2xl mt-2'>Cocina</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>¿Listo para experimentar y crear? Nuestra cocina te da la bienvenida para que saques a relucir tus habilidades culinarias, disfrutes de momentos de conexión y hagas que cada comida sea especial. <br/> En este espacio, hemos pensado en cada detalle para facilitar tus aventuras culinarias. Desde utensilios hasta electrodomésticos, nuestra cocina está lista para ser tu zona creativa. Prepárate para sorprender a tus papilas gustativas con platos deliciosos, ya que te proporcionamos todo lo necesario para cocinar con comodidad y estilo.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        {/* <img className='rounded-xl max-w-xs' src={comedorImg} alt="/" /> */}
                        <h3 className='font-bold text-2xl mt-2'>Comedor</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>En este espacio, hemos creado un ambiente acogedor para que hasta cuatro personas puedan disfrutar de deliciosas comidas y conversaciones significativas. Ya sea que estés buscando una comida relajada o un lugar para conectarte con tus seres queridos, nuestro comedor está diseñado para brindarte la atmósfera perfecta.<br/>Imagina charlar y reír mientras saboreas platillos exquisitos en una atmósfera cálida y acogedora. </p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        {/* <img className='rounded-xl max-w-xs' src={habi01Img} alt="/" /> */}
                        <h3 className='font-bold text-2xl mt-2'>Habitacion principal</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Aquí encontrarás una cama de tamaño Queen que te brindará un descanso reparador y noches de sueño inigualables. Además, hemos proporcionado un colgador para tu ropa, manteniendo tus pertenencias organizadas y listas para usar.<br/>La habitación principal es también un espacio para el entretenimiento. Un televisor está a tu disposición, con acceso a YouTube y Netflix, para que puedas relajarte con tus videos y series favoritas en un ambiente privado y acogedor. </p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        {/* <img className='rounded-xl max-w-xs' src={habi02Img} alt="/" /> */}
                        <h3 className='font-bold text-2xl mt-2'>Habitacion secundaria</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>En esta habitación, encontrarás una cómoda cama de 2 plazas que te brindará un lugar acogedor para recargar energías y disfrutar de un sueño reparador. Además, hemos añadido una cómoda para que puedas organizar tus ropas y equipajes de manera ordenada, manteniendo todo a tu alcance y listo para usar.<br/>Esta habitación secundaria ha sido creada para proporcionarte un refugio de tranquilidad y comodidad durante tu estadía. </p>
                  </div>
              </div>

          </div>
      </div>
  </div>
  );
};

export default Support;
