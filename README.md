Purpose:

To learn about the world of GraphQL and Adonis, a rail-like framework for Node

Technologie Used:

-> Adonis (Another Node framework, but like RAILS!!)
  -> Adonis uses async and waits, no callback hells
  -> Looks good for CRUD
  -> Lucid ORM which reminds me of ActiveRecord
-> ApolloServer -> The GraphQL server to work with Node frameworks
-> GraphQL itself
-> PostgreSQL

# To Test

-> Utilize Insomnia
-> Launch Adonis App "adonis serve --dev"
-> Create Request on Insomnia (POST with Body Type as GraphQL Query)
-> Create User (mutation)
  -> "mutation {
      createUser(username: "hammy", email: "hammy@example.com", password: "password") {
          id
          username
          email
      }
    }"
-> Authenticate (mutation login)
  -> "mutation {
          login(email: "hammy@example.com", password: "password")
      }"
-> Check response, take JWT token, Add JWT to Bearer Token Auth in Insomnia
-> Create Post (mutation addPost)
  -> "mutation {
            addPost(title: "Hello Everyone", content: "First Blog Post") {
                id
                title
                slug
                content
                user {
                    username
                    email
                }
            }
        }"
->

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
