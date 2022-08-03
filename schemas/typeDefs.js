const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    name: String
    purchaseDate: String
    products: Int
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: String
    quality: String
  }

  type User {
    firstName: String
    lastName: String
    email: String
    password: String
    orders: String
  }

  type Query {
    category: [Category]
    order: [Order]
    product: [Product]
    user: [User]
  }

  type Mutation {
    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;