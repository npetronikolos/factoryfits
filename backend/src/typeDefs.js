const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Item {
    id: ID!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Int!
  }

  type Query {
    items: [Item]!
  }

  type Mutation {
    createItem(
      title: String!
      description: String!
      price: Int
      image: String
      largeImage: String
    ): Item!
  }
`;

module.exports = typeDefs;
