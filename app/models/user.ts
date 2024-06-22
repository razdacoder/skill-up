import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export class UserDto {
  constructor(private user?: User) {}

  toJson() {
    if (!this.user) {
      return null
    }
    return {
      id: this.user.id,
      fullName: this.user.fullName,
      email: this.user.email,
      avatarUrl: this.user.avatarUrl,
      isAdmin: this.user.isAdmin,
      isEmailVerified: this.user.isEmailVerified,
    }
  }
}

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare avatarUrl: string | null

  @column()
  declare isAdmin: boolean

  @column()
  declare isEmailVerified: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
