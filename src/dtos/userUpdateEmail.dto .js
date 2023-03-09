import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import { emailDTOSchema, passwordDTOSchema } from '#dtos/dto-types.js'

export const userUpdateEmailDTOSchema = Type.Object(
   {
      email: emailDTOSchema,
      password: passwordDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserUpdateEmailSchema = ajv.compile(userUpdateEmailDTOSchema)
const userUpdateEmailDTO = (req, res, next) => {
   const isDTOValid = validateUserUpdateEmailSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserUpdateEmailSchema.errors.map((error) => error.message) })

   next()
}

export default userUpdateEmailDTO
