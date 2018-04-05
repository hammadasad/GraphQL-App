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
// The query we want to define on the models above
// Fetch user based on user id or posts belonging to a user id
type Query {
  allUsers: [User]
  fetchUser(id: Int!): User
  allPosts: [Post]
  fetchPost(id: Int!): Post
}
