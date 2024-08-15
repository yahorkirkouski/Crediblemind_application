import { GraphQLClient, gql } from 'graphql-request';

const SPACE_ID = 'h3n75a0xb6vi';
const ACCESS_TOKEN = '3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54';
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

const GET_ASSESSMENT_QUERY = gql`
  query GetAssessment {
    assessmentCollection {
      items {
        name
        slug
        intro {
          json
        }
        questions
        resultsIntro {
          json
        }
      }
    }
  }
`;

export const fetchAssessmentData = async () => {
  try {
    const data = await client.request(GET_ASSESSMENT_QUERY);
    return data.assessmentCollection.items;
  } catch (error) {
    console.error('Error fetching assessment data:', error);
    throw error;
  }
};
