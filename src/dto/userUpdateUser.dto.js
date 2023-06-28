import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import { nameDTOSchema, surnameDTOSchema } from '#lib/dto-types.js'

const UpdateUserDTOSchema = Type.Object(
    {
        name: nameDTOSchema,
        surname: surnameDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'El formato del objeto no es el correcto',
        },
    }
)

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')
addErrors(ajv)

const validateSchema = ajv.compile(UpdateUserDTOSchema)

const userUpdateUserDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body)
    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        })
    next()
}

export default userUpdateUserDTO
