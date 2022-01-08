import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      post {
        id
        title
        slug
        summery
        publishedAt
        featured
        mainPost
        timeToRead
        mainImage {
          url
        }
        tags {
          id
          title
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.post;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        summery
        publishedAt
        featured
        mainPost
        timeToRead
        mainImage {
          url
        }
        postBody {
          html
        }
      }
      tags {
        id
        title
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

// posts()
// where: { featured: true },
// orderBy: createdAt_DESC // _ASC
// first: 1
