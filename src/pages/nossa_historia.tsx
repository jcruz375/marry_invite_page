import Image from 'next/image';
import photo_1 from '../../public/assets/photo_1.png'
import photo_2 from '../../public/assets/photo_2.png'
import photo_3 from '../../public/assets/photo_3.png'
import photo_4 from '../../public/assets/photo_4.png'
import photo_5 from '../../public/assets/photo_5.png'
import photo_6 from '../../public/assets/photo_6.png'
import photo_7 from '../../public/assets/photo_7.png'
import photo_8 from '../../public/assets/photo_8.png'
import photo_9 from '../../public/assets/photo_9.png'
import photo_10 from '../../public/assets/photo_10.png'
import photo_11 from '../../public/assets/photo_11.png'
import photo_12 from '../../public/assets/photo_12.png'

export default function OurHistory() {
  return (
    <main className='w-full mx-auto px-4 sm:px-16'>
      <section className="flex flex-col justify-start items-center min-h-screen">
        <p className='font-serif text-5xl'>
          Nossa história
        </p>
        <p className='font-serif text-2xl text-center sm:text-left mt-11'>
          Como é bom recordar! Conheça os detalhes da nossa caminhada até esse grande sonho do nosso casamento.
        </p>
        <p className='font-serif text-xl text-center mt-16'>
          Quando nos conhecemos, nem imaginávamos que um dia tudo isso acabaria como um final de conto de fadas, com a realização do nosso grande sonho: o casamento! O coração aperta, o dia está chegando, e começa a passar um filme de tudo o que passamos para chegar até aqui. E como é bom relembrar cada pedacinho da nossa história de amor.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-3 gap-8 mt-11 w-full">
          <div className="flex justify-center items-center">
            <Image
              src={photo_1}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_2}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_3}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_4}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_5}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_6}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_7}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_8}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_9}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_10}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_11}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={photo_12}
              alt="foto de claudia e eduardo"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
