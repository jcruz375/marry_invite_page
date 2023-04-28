import Select from '@/components/confirmar_presenca/dropdown';
import styles from '../styles/confirmar_presenca.module.scss';
import InputMask from 'react-input-mask';
import { useState } from 'react';


export default function Presence() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-16'>
      <section className="flex flex-col justify-start items-center min-h-screen">
        <p className='font-serif text-5xl'>
          Confirmação de presença
        </p>
        <p className='font-serif text-2xl text-center mt-11'>
          Faça parte da nossa história de amor, confirme sua presença.
        </p>
        <section className="w-11/12 sm:w-96 px-4 mx-auto mt-24">
          <input
            type="text"
            placeholder='Nome completo'
            className={`w-full h-16 rounded px-5 ${styles.input}`}
          />
          <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-9">
            <h2 className="text-lg font-serif">Você irá ao evento?</h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-0">
              <label className="inline-flex items-center mt-4 sm:mt-0">
                <input type="radio" className="form-radio w-6 h-6" name="attendance" value="yes" />
                <span className="ml-2 font-serif">Sim</span>
              </label>
              <label className="inline-flex items-center ml-0 sm:ml-6 mt-6 sm:mt-0">
                <input type="radio" className="form-radio w-6 h-6" name="attendance" value="no" />
                <span className="ml-2 font-serif">Não</span>
              </label>
            </div>
          </article>
          <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-9">
            <h2 className="text-lg font-serif">Total de adultos</h2>
            <Select />
          </article>
          <input
            type="text"
            placeholder='Email'
            className={`w-full h-16 rounded px-5 mt-6 ${styles.input}`}
          />
          <InputMask
            id="phone"
            name="phone"
            placeholder='Telefone'
            type="tel"
            mask="(99) 99999-9999"
            className={`w-full h-16 rounded px-5 mt-6 ${styles.input}`}
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <div className="w-full flex justify-center items-center mt-12 sm:mt-6">
            <button className={`rounded-full w-full ${styles.button}`}>
              Responder
            </button>
          </div>
        </section>
      </section>
    </main>
  )
}
