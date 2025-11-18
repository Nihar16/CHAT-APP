const { createYoga, createSchema } = require('graphql-yoga');
const { createServer } = require('http');

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

const resolvers = {
    Query: {
        messages: () => MESSAGES,
    }
};

const Port = 4000;

const schema = createSchema({
    typeDefs,
    resolvers
});

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}/graphql`);
});
