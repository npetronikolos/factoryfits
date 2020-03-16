const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const { prisma } = require("../generated/prisma-client/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: "service:warehouse:vQcveOscJ4H4KcGVkhbnlQ"
  },
  context: {
    prisma
  },
  context: (req) => ({ ...req, prisma })
});

server
  .listen({
    port: 8383
  })
  .then((info) =>
    console.log(`Server started on http://localhost:${info.port}`)
  );
