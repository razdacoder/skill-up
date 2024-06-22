import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('title').notNullable()
      table.string('slug').notNullable().unique()
      table.text('description').nullable()
      table.float('price').notNullable()
      table.integer('teacher_id').references('id').inTable('users').notNullable()
      table.string('image_url').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
