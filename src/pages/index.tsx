import Image from 'next/image';
import styles from '../styles/home.module.scss';
import claudiaEduardoImg from '../../public/assets/claudia_eduardo_escrita.png'
import claudiaEduardoPhoto from '../../public/assets/claudia_eduardo_photo.png'
import { useEffect, useState } from 'react';
import { Countdown } from '@/components/home/countdown';

export default function Home() {  
  return (
      <main className={`max-w-6xl mx-auto`}>
        <article className={styles.main_container}>
          <Image
            className={styles.bg_img}
            src={claudiaEduardoPhoto}
            alt={'Foto de claudia e eduardo'}
          />
          <aside>
            <Image 
              src={claudiaEduardoImg}
              alt={'Escrita em letra cursiva: claudia e eduardo'}
            />
            <p className='font-serif text-2xl'>
              13. 10. 2023
            </p>
          </aside>
        </article>
        <div className={`w-72 mx-auto`}>
          <div className="border-t border-black my-4 mt-20"></div>
        </div>
        <Countdown />
        <section className={`w-4/5 mx-auto mt-20 sm:mt-44 ${styles.footer_text_section}`}>
          <p className='font-serif text-5xl'>
            Sejam bem-vindos ao nosso site!
          </p>
          <p className='font-serif text-2xl mt-6 sm:mt-11'>
            A melhor forma de compartilhar esse momento com vocês é unindo sonhos.
          </p>
        </section>
        <section className={`w-fit mx-auto mt-8 sm:mt20 ${styles.footer_section}`}>
          <p className='font-serif text-center'>
            Aqui vamos contar à vocês, queridos amigos e familiares, os momentos mais marcantes da nossa história de amor. A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos para sempre, o dia do nosso casamento.
          </p>
        </section>
      </main>
  )
}
