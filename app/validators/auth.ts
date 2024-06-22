import vine from '@vinejs/vine'

export const registerValidation = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(100).optional(),
    email: vine.string().email().normalizeEmail().isUnique({ table: 'users', column: 'email' }),
    password: vine.string().minLength(8).confirmed(),
  })
)