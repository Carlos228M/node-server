import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import { emailDTOSchema, passwordDTOSchema } from '#dtos/dto-types.js'

export const userLoginDTOSchema = Type.Object(
   {
      email: emailDTOSchema,
      password: passwordDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserLoginSchema = ajv.compile(userLoginDTOSchema)
const userLoginDTO = (req, res, next) => {
   const isDTOValid = validateUserLoginSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserLoginSchema.errors.map((error) => error.message) })

   next()
}

export default userLoginDTO
