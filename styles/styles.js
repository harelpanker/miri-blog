import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SectionHeader({ title, link, icon }) {
  return (
    <header className='flex flex-col gap-4 items-start'>
      <h2 className='font-medium text-2xl'>{title}</h2>
      <Link href={link}>
        <a className='text-sm font-semibold flex items-center gap-2 group relative pr-1 overflow-hidden'>
          <span>See more</span>
          <FontAwesomeIcon
            className='transition duration-500 group-hover:translate-x-1'
            icon={icon}
          />
          <div className='absolute inset-x-0 bottom-0 -translate-x-full transition duration-500 w-full h-[0.5px] bg-gray-50 group-hover:translate-x-0'></div>
        </a>
      </Link>
    </header>
  );
}
