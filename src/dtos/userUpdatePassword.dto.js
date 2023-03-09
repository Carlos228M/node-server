import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import { passwordDTOSchema } from '#dtos/dto-types.js'

export const userUpdatePasswordDTOSchema = Type.Object(
   {
      oldPassword: passwordDTOSchema,
      password: passwordDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserUpdatePasswordSchema = ajv.compile(userUpdatePasswordDTOSchema)
const userUpdatePasswordDTO = (req, res, next) => {
   const isDTOValid = validateUserUpdatePasswordSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserUpdatePasswordSchema.errors.map((error) => error.message) })

   next()
}

export default userUpdatePasswordDTO
