import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import { nameDTOSchema, surnameDTOSchema } from '#dtos/dto-types.js'

export const userUpdateDataDTOSchema = Type.Object(
   {
      name: nameDTOSchema,
      surname: surnameDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserUpdateDataSchema = ajv.compile(userUpdateDataDTOSchema)
const userUpdateDataDTO = (req, res, next) => {
   const isDTOValid = validateUserUpdateDataSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserUpdateDataSchema.errors.map((error) => error.message) })

   next()
}

export default userUpdateDataDTO
