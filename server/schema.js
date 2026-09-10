const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get upcoming movies"
    upcomingMovies: [Movie!]!
  }

  "Movie details and thumbnails"
  type Movie {
    id: ID!
    original_title: String!
    overview: String!
    poster_path: String
    vote_average: Float
    release_date: String
  }
`;

module.exports = typeDefs;

