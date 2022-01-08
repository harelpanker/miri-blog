import Link from 'next/link';
import Image from 'next/image';

const MainPost = ({ post }) => {
  return (
    <Link key={post.id} href={`/blog/${post.slug}`}>
      <article className='flex flex-col gap-3 cursor-pointer max-w-screen-md group'>
        <figure className='relative w-full rounded-xl overflow-hidden h-60 lg:h-96'>
          <Image
            src={post.mainImage.url}
            alt={post.title}
            layout='fill'
            className='object-cover group-hover:scale-105 transition duration-500'
            priority
          />
          {/* <div className='xl:absolute z-10 inset-0 xl:glass xl:opacity-50 group-hover:opacity-0 transition duration-500' /> */}
        </figure>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-xl lg:text-3xl'>{post.title}</h3>
          <div className='text-xs font-semibold capitalize tracking-widest opacity-70'>
            {post.timeToRead}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MainPost;
