import Link from 'next/link';
import Image from 'next/image';

const FeaturedPost = ({ post }) => {
  return (
    <li key={post.id}>
      <Link href={`/blog/${post.slug}`}>
        <article className='flex flex-col lg:flex-row gap-3 cursor-pointer group'>
          <figure className='relative w-full rounded-xl overflow-hidden h-60 lg:h-28 lg:max-w-[11.5rem]'>
            <Image
              src={post.mainImage.url}
              alt={post.title}
              layout='fill'
              className='object-cover group-hover:scale-105 transition duration-500'
              priority
            />
            {/* <div className='xl:absolute z-10 inset-0 xl:glass xl:opacity-50 group-hover:opacity-0 transition duration-500' /> */}
          </figure>
          <div className='flex flex-col gap-2 lg:justify-center'>
            <h3 className='font-semibold text-xl lg:text-sm'>{post.title}</h3>
            <div className='text-xs font-semibold capitalize tracking-widest opacity-70'>
              {post.timeToRead}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default FeaturedPost;
