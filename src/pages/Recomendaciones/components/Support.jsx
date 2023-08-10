import plazaImg from '../assets/plaza-armas.jpg'
import catedralImg from '../assets/catedral.jpg'
import coricanchaImg from '../assets/coricancha.jpg'
import sanblasImg from '../assets/san-blas.jpg'
import piedraImg from '../assets/piedra-12.jpg'
import sanPedroImg from '../assets/san-pedro.jpg'
import museoImg from '../assets/museo.jpg'
import pacchaImg from '../assets/paccha.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-32'>
      <div className='w-full h-[1800px] bg-zinc-800 absolute'>
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <h3 className='text-7xl max-md:text-5xl font-bold pt-10 text-center'>Lugares cerca para visitar</h3>

          <div className='grid relative gap-x-8 gap-y-10 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={plazaImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Plaza de Armas</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Este impresionante espacio público es el corazón de Cusco, rodeado de majestuosos edificios coloniales. La Catedral del Cusco domina uno de sus lados, con su fachada barroca adornada y su interior que alberga tesoros religiosos y obras maestras del arte colonial. La Iglesia de la Compañía de Jesús, en el lado opuesto, exhibe una fachada impresionante tallada en piedra volcánica, y en su interior, una profusión de decoraciones de estilo barroco mestizo.</p>
                  </div>
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={catedralImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Catedral del Cusco</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Esta imponente catedral del siglo XVI es un testimonio del poder y la riqueza de la época colonial. Sus tres naves están llenas de altares dorados, retablos tallados y pinturas de artistas indígenas y europeos. Entre sus obras más famosas se encuentra "La Última Cena" de Marcos Zapata, donde se sirve un cuy (roedor tradicional andino) asado en lugar del cordero tradicional</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={coricanchaImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Qorikancha</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>El Templo del Sol, como se le conoce en quechua, muestra la amalgama de dos culturas distintas. Las paredes de piedra incaica se fusionan con las arcadas y bóvedas de la iglesia colonial de Santo Domingo, construida sobre sus cimientos. El altar dorado y las capillas laterales denotan la magnificencia religiosa de la época.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={sanblasImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Barrio de San Blas</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Con sus callejones empedrados y casonas de estilo colonial, este pintoresco barrio es un refugio para artistas y artesanos. Sus calles estrechas están llenas de talleres de cerámica, joyería y pintura, y la iglesia de San Blas cuenta con un impresionante púlpito tallado que muestra la destreza artística de los cusqueños.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={piedraImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Piedra de los Doce Ángulos</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>En la calle Hatunrumiyoc, esta piedra es un ejemplo asombroso de la arquitectura inca, con sus bloques de piedra tallados y encajados con precisión. La perfección de su ajuste sin el uso de mortero es una muestra de la destreza de los constructores incas.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={sanPedroImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Mercado Central de San Pedro</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Sumérgete en la auténtica vida local explorando este mercado vibrante. Puestos de frutas y verduras frescas, carne, productos lácteos y productos andinos como quinoa y chuño muestran la riqueza de la gastronomía local. Además, los puestos de artesanía ofrecen una variedad de souvenirs para los visitantes.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={museoImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>Museo de Arte Precolombino</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>Este museo ofrece una ventana a la rica historia preincaica del Perú. Sus exhibiciones cuentan la historia de las culturas que habitaron la región antes de los incas, a través de una impresionante colección de cerámica, textiles, joyas y objetos rituales.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 flex flex-row-reverse max-md:flex-col gap-5 items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-xl max-w-md max-md:max-w-xs' src={pacchaImg} alt="/" />
                        <h3 className='font-bold text-2xl mt-2'>La Paccha De Pumaq</h3>
                    </div>
                    <p className='text-gray-600 text-xl text-justify p-5'>La Paccha de Pumaq Chupan en Cusco, "fuente de agua en la cola del puma" en quechua, es una cascada de 7 metros de altura y 10 metros de ancho, alimentada por la unión de los ríos Saphy y Tullumayu. Rodeada por una estructura de 9 metros de altura con detalles artísticos, esta maravilla natural añade encanto a la ciudad imperial de Cusco.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
