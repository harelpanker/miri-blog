import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startWidth, setStartWidth] = useState(null);

  const { width } = useWindowDimensions();
  useEffect(() => setStartWidth(width), []);

  const openCloseHendler = () => setIsOpen(!isOpen);

  return (
    <header className='w-full fixed top-0 z-40 h-[4.5rem] md:h-20 flex items-center glass px-4'>
      <nav className='container max-w-screen-xl flex justify-between items-center'>
        <Link href='/' onClick={openCloseHendler}>
          <h2 className='font-bold text-3xl relative z-10 cursor-pointer'>
            Logo
          </h2>
        </Link>

        <button
          onClick={openCloseHendler}
          className='w-12 h-12 flex items-center justify-center p-3 relative z-10 lg:hidden'>
          <FontAwesomeIcon
            className={`${
              isOpen ? 'opacity-0' : 'opacity-100'
            } transition duration-500 relative inset-0 flex items-center justify-center text-xl`}
            icon={faBars}
          />
          <FontAwesomeIcon
            className={`${
              isOpen ? 'opacity-100' : 'opacity-0'
            } transition duration-500 absolute left-1/2 -translate-x-1/2 flex items-center justify-center text-xl`}
            icon={faTimes}
          />
        </button>

        {startWidth < 1024 ? (
          <ul
            onClick={openCloseHendler}
            className={`${
              isOpen ? 'fixed' : 'hidden'
            } lg:flex w-full lg:w-auto inset-0 h-screen lg:h-auto bg-gray-50 lg:bg-transparent text-xl lg:text-base font-semibold flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-end gap-4 py-20 px-4`}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        ) : (
          <ul
            className={`${
              isOpen ? 'fixed' : 'hidden'
            } lg:flex w-full lg:w-auto inset-0 h-screen lg:h-auto bg-gray-50 lg:bg-transparent text-xl lg:text-base font-semibold flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-end gap-4 py-20 px-4`}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
