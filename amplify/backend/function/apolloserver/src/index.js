// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };

const fetch = require('node-fetch');
const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    upcomingMovies: [Movie!]!
  }

  type Movie {
    id: ID!
    original_title: String!
    overview: String!
    poster_path: String
    vote_average: Float
    release_date: String
  }
`;

const API_KEY = "4bd38043a0c71eafacb725aad015d9b6";
const resolvers = {
    Query: {
        // returns an array of upcoming movies
        upcomingMovies: async () => {
          try {
            //TODO: store URI in environment
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${API_KEY}`);
            const json = await response.json();
            return json.results;
          } catch (err) {
              console.error(err);
            return err;
          }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }),
  })

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
})