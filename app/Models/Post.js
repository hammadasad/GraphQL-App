'use strict'

const Model = use('Model')

class Post extends Model {
  // Relationship between a post and its single user
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Post
