'use strict'

// Retrieve graphql util
const { makeExecutableSchema } = require('graphql-tools')

// Define our schema using the GraphQL schema lang
// Fields with ! mean NOT NULL
const typeDefs = `
  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
`
// The query we want to define on the schema above
// Fetch user based on user id or posts belonging to a user id
type Query {
  allUsers: [User]
  fetchUser(id: Int!): User
  allPosts: [Post]
  fetchPost(id: Int!): Post
}

// Define our mutations to the data on the server
// signIn -> returns a JWT (String), allows user to login
// addPost -> Authenticated user to create a post
type Mutation {
  signIn (email: String!, password: String!): String
  createUser (username: String!, email: String!, password: String!): User
  addPost (title: String!, content: String!): Post
}

// Build the schema
const resolvers = require('./resolvers')
module.exports = makeExecutableSchema({ typeDefs, resolvers})
