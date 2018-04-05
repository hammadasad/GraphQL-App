'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned().notNullable()
      table.string('title').notNullable()
      table.string('slug').unique().notNullable()
      table.text('content').notNullable()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
