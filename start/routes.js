'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const GraphqlAdonis = use('ApolloServer')
const schema = require('../app/data/schema')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

// passing schema and context (auth) as GraphQL options
// GraphQL accepts 3 objects -> graphQl options, request and response
Route.route('/graphql', ({ request, auth, response }) => {
    return GraphqlAdonis.graphql({
      schema,
      context: { auth }
    }, request, response)
}, ['GET', 'POST'])

// A Testing route
Route.get('/graphiql', ({ request, response }) => {
    return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
})
