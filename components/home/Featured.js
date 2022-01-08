import Link from 'next/link';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainPost from './MainPost';
import FeaturedPost from './FeaturedPost';

const Featured = ({ posts }) => {
  return (
    <section className='py-14 px-4'>
      <div className='container max-w-sm sm:max-w-screen-xl'>
        <header className='flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-between mb-14'>
          <h2 className='font-medium text-2xl'>Featured posts</h2>
          <Link href='/blog'>
            <a className='text-sm font-semibold flex items-center gap-2 group relative pr-1 overflow-hidden'>
              <span>See more</span>
              <FontAwesomeIcon
                className='transition duration-500 group-hover:translate-x-1'
                icon={faLongArrowAltRight}
              />
              <div className='absolute inset-x-0 bottom-0 -translate-x-full transition duration-500 w-full h-[0.5px] bg-gray-50 group-hover:translate-x-0'></div>
            </a>
          </Link>
        </header>
        <div className='flex flex-col gap-10 md:w-8/12 md:mx-auto lg:w-full lg:flex-row lg:justify-between'>
          {posts
            .filter((post) => post.mainPost)
            .map((post) => (
              <MainPost key={post.id} post={post} />
            ))}

          <ul className='flex flex-col gap-8'>
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Featured;
