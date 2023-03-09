import ajv from '#lib/ajv.js'
import { Type } from '@sinclair/typebox'
import {
   emailDTOSchema,
   idDTOSchema,
   nameDTOSchema,
   passwordDTOSchema,
   surnameDTOSchema
} from '#dtos/dto-types.js'

export const userRegisterDTOSchema = Type.Object(
   {
      _id: idDTOSchema,
      name: nameDTOSchema,
      surname: surnameDTOSchema,
      email: emailDTOSchema,
      password: passwordDTOSchema
   },
   {
      additionalProperties: false
   }
)

const validateUserRegisterSchema = ajv.compile(userRegisterDTOSchema)
const userRegisterDTO = (req, res, next) => {
   const isDTOValid = validateUserRegisterSchema(req.body)
   if (!isDTOValid)
      return res
         .status(400)
         .send({ errors: validateUserRegisterSchema.errors.map((error) => error.message) })

   next()
}

export default userRegisterDTO
