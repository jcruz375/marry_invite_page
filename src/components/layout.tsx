import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '../styles/layout.module.scss';
import logoImg from '../../public/assets/logo.png';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

interface layoutPropsType {
  children: JSX.Element;
}

export function Layout({ children }: layoutPropsType) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="logo C e E"
            width={136}
            height={50}
          />
        </Link>
        <nav>
          <Link href="/nossa_historia">
            <p className='font-serif text-2xl'>
              Nossa história
            </p>
          </Link>
          <Link href="/presentes">
            <p className='font-serif text-2xl'>
              Presentes
            </p>
          </Link>
          <Link href="/">
            <p className='font-serif text-2xl'>
              Confirmar presença
            </p>
          </Link>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </main>
  )
}
