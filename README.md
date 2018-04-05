Purpose:

To learn about the world of GraphQL and Adonis, a rail-like framework for Node

Technologie Used:

-> Adonis (Another Node framework, but like RAILS!!)<br />
  -> Adonis uses async and waits, no callback hells<br />
  -> Looks good for CRUD<br />
  -> Lucid ORM which reminds me of ActiveRecord<br />
-> ApolloServer -> The GraphQL server to work with Node frameworks<br />
-> GraphQL itself<br />
-> PostgreSQL<br />

# To Test

-> Utilize Insomnia<br />
-> Launch Adonis App <br />```adonis serve --dev```<br />
-> Create Request on Insomnia (POST with Body Type as GraphQL Query)<br />
-> Create User (mutation)<br />
  -> ```mutation {
      createUser(username: "hammy", email: "hammy@example.com", password: "password") {
          id
          username
          email
      }
    }```
    <br />
-> Authenticate (mutation login)<br />
  -> ```mutation {
          login(email: "hammy@example.com", password: "password")
      }```
      <br />
-> Check response, take JWT token, Add JWT to Bearer Token Auth in Insomnia<br />
-> Create Post (mutation addPost)<br />
  -> ```mutation {
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
        }```
<br />

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
