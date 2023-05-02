import Select from '@/components/confirmar_presenca/dropdown';
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { db } from '../services/firebase';
import styles from '../styles/confirmar_presenca.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Presence() {
  const [name, setName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [totalAdults, setTotalAdults] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameComplete, setIsNameComplete] = useState(false);

  function validateNameComplete(name: string): boolean {
    const partName = name.trim().split(' ');
    setIsNameComplete(partName.length >= 2)
    return partName.length >= 2;
  }

  const handleConfirmPresenceForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateNameComplete(name)) {
      if (phoneNumber != '') {
        try {
          const docRef = await addDoc(collection(db, "guests"), {
            name,
            isConfirmed: isConfirmed ? 'Sim' : 'Não',
            total_adults: totalAdults,
            email,
            phone: phoneNumber
          });
          //todo notificação de presença confirmada
          if (isConfirmed) {
            alert("Presença confirmada com sucesso!")
          } else {
            alert('Obrigado por informar que não poderá comparecer!')
          }
          console.log("Document written with ID: ", docRef);
        } catch (error) {
          alert("Error adding document: " + error);
          console.error("Error adding document: ", error);
        }
      } else {
        // todo mensagem de erro campos obrigatorios
        alert('Necessário informar o telefone');
      }
    } else {
      // todo mensagem de erro campos obrigatorios
      alert('Necessário informar o nome completo');
    }

  }

  return (
    <main className='max-w-md mx-auto px-0 sm:px-16'>
      <section className="flex flex-col justify-start items-center min-h-screen">
        <p className='font-serif text-5xl'>
          Confirmação de presença
        </p>
        <p className='font-serif text-2xl text-center mt-11'>
          Faça parte da nossa história de amor, confirme sua presença.
        </p>
        <section className="w-full sm:w-96 px-4 mx-auto mt-24">
          <form onSubmit={handleConfirmPresenceForm}>
            <input
              type="text"
              placeholder='Nome completo'
              className={`w-full h-16 rounded px-5 ${styles.input} ${!isNameComplete ? 'border-2 border-rose-500' : 0}`}
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-9">
              <h2 className="text-lg font-serif">Você irá ao evento?</h2>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-0">
                <label className="inline-flex items-center mt-4 sm:mt-0">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="attendance"
                    value="yes"
                    checked={isConfirmed}
                    onChange={(event) => {
                      setIsConfirmed(true)
                    }}
                  />
                  <span className="ml-2 font-serif">Sim</span>
                </label>
                <label className="inline-flex items-center ml-0 sm:ml-6 mt-6 sm:mt-0">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="attendance"
                    value="no"
                    checked={!isConfirmed}
                    onChange={(event) => {
                      setIsConfirmed(false)
                    }}
                  />
                  <span className="ml-2 font-serif">Não</span>
                </label>
              </div>
            </article>
            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-9">
              <h2 className="text-lg font-serif">Total de adultos</h2>
              <Select
                totalAdults={totalAdults}
                setTotalAdults={setTotalAdults}
              />
            </article>
            <input
              type="text"
              placeholder='Email'
              className={`w-full h-16 rounded px-5 mt-6 ${styles.input}`}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <InputMask
              id="phone"
              name="phone"
              placeholder='Telefone'
              type="tel"
              mask="(99) 99999-9999"
              className={`w-full h-16 rounded px-5 mt-6 ${styles.input}`}
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
            <div className="w-full flex justify-center items-center mt-12 sm:mt-6">
              <button type='submit' className={`rounded-full w-full ${styles.button}`}>
                Responder
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  )
}
