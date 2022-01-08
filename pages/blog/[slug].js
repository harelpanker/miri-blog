import Head from 'next/head';
import Image from 'next/image';
import { getPostDetails } from '../../services/index';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
import { request, gql } from 'graphql-request';

const PostPage = ({ data }) => {
  const post = data[0];
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.summery} name='description' />
      </Head>
      <main className='w-full overflow-hidden px-4 py-36'>
        <article>
          <header className='container max-w-7xl'>
            <h1 className='text-3xl font-bold md:text-7xl'>{post.title}</h1>
            <div className='mt-6 text-xs uppercase font-bold opacity-75'>
              <p>{post.timeToRead}</p>
            </div>
            <figure className='relative w-full rounded-xl overflow-hidden h-60 lg:h-[35rem] my-16'>
              <Image
                src={post.mainImage.url}
                alt={post.title}
                layout='fill'
                className='object-cover'
              />
            </figure>
            <p className='prose lg:prose-xl prose-gray container max-w-3xl'>
              {post.summery}
            </p>
          </header>
          <div
            className='prose lg:prose-xl prose-gray mt-8 container max-w-3xl'
            dangerouslySetInnerHTML={{ __html: post.postBody.html }}
          />
        </article>
      </main>
    </>
  );
};

// getStaticPaths
export async function getStaticPaths() {
  const query = gql`
    query MyQuery {
      post {
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  const posts = result.post;

  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { data },
  };
}

export default PostPage;
