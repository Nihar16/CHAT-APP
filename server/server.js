const { GraphQLServer } = require('graphql-yoga');

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
        messages: () => MESSAGES,
    }
};

const Port = 4000;

const server = new GraphQLServer();
server.start(() => console.log(`Server is running on http://localhost:${Port}/`));
