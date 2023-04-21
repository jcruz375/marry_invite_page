
import { useEffect, useState } from 'react';
import styles from '../../styles/home.module.scss';


interface countdownDateProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [countdownDate, setCountdownDate] = useState(new Date("Oct 12, 2023 23:59:59").getTime());
  const [countdownTime, setCountdownTime] = useState({} as countdownDateProps);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdownTime({ days, hours, minutes, seconds });
      if (distance < 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
    return () => clearInterval(countdownTimer);


  }, [countdownDate]);

  return (
    <section className={`w-3/5 mx-auto ${styles.countdown_container}`}>
      <header>
        <p className='font-serif text-2xl'>
          CONTAGEM REGRESSIVA PARA O GRANDE DIA
        </p>
      </header>
      <article>
        <div className={styles.countdown_date_container}>
          <div className={styles.countdown_date_item}>
            <p className='font-serif'>
              {countdownTime.days}
            </p>
          </div>
          <p className='font-serif text-base'>
            Dias
          </p>
        </div>
        <div className={styles.countdown_date_container}>
          <div className={styles.countdown_date_item}>
            <p className='font-serif'>
              {countdownTime.hours}
            </p>
          </div>
          <p className='font-serif text-base'>
            Horas
          </p>
        </div>
        <div className={styles.countdown_date_container}>
          <div className={styles.countdown_date_item}>
            <p className='font-serif'>
              {countdownTime.minutes}
            </p>
          </div>
          <p className='font-serif text-base'>
            Minutos
          </p>
        </div>
        <div className={styles.countdown_date_container}>
          <div className={styles.countdown_date_item}>
            <p className='font-serif'>
              {countdownTime.seconds}
            </p>
          </div>
          <p className='font-serif text-base'>
            Segundos
          </p>
        </div>
      </article>
    </section>
  )
}
