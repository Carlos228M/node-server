import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import { passwordDTOSchema } from '#dtos/dto-types.js'

export const userUnregisterDTOSchema = Type.Object(
   {
      password: passwordDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserUnregisterSchema = ajv.compile(userUnregisterDTOSchema)
const userUnregisterDTO = (req, res, next) => {
   const isDTOValid = validateUserUnregisterSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserUnregisterSchema.errors.map((error) => error.message) })

   next()
}

export default userUnregisterDTO
