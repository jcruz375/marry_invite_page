import Link from 'next/link';
import { useContext } from 'react';
import { DrawerContext } from '../contexts/DrawerContext';
import styles from '../styles/layout.module.scss';


const Drawer = () => {
  const { isDrawerOpen, closeDrawer } = useContext(DrawerContext);

  return (
    <div className={`fixed inset-0 overflow-hidden ${isDrawerOpen ? 'z-40' : ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeDrawer}></div>

        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className={`relative w-screen max-w-md ${isDrawerOpen ? 'z-50' : ''}`}>
            <div className="h-full overflow-y-auto bg-white shadow-xl">
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-start justify-end">
                  <div className="ml-3">
                    <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={closeDrawer}>
                      <span className="sr-only">Fechar menu</span>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between px-4 h-1/2">
                <ul className="flex flex-col items-start justify-between px-4 h-40">
                  <Link href="/nossa_historia" onClick={closeDrawer}>
                    <p className='font-serif text-2xl'>
                      Nossa história
                    </p>
                  </Link>
                  <Link href="/presentes" onClick={closeDrawer}>
                    <p className='font-serif text-2xl'>
                      Presentes
                    </p>
                  </Link>
                  <Link href="/local">
                    <p className='font-serif text-2xl'>
                      Local
                    </p>
                  </Link>
                  <Link href="/confirmar_presenca" onClick={closeDrawer}>
                    <p className='font-serif text-2xl'>
                      Confirmar presença
                    </p>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
