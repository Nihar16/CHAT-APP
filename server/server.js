const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;



const server = new GraphQLServer();
server.start(() => console.log(`Server is running on http://localhost:${Port}/`));
