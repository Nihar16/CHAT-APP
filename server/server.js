const { GraphQLServer } = require('graphql-yoga');

const MESSAGES = [];

const typeDefs = `
  type Message {
    id: ID!
    content: String! 
  }

  type Query {
    messages: [Message!]!
  }
`;

const Resolvers = {
    Query: {
        messages: () => messages,
    }
};

const Port = 4000;

const server = new GraphQLServer(typeDefs, Resolvers);
server.start(() => console.log(`Server is running on http://localhost:${Port}/`));
