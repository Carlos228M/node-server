import { Type } from '@sinclair/typebox'

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo no es válido. Debe ser un string',
        format: 'El formato no es válido. Debe ser uuid4',
    },
})

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'Al menos 2 caracteres de longitud',
        maxLength: 'Como máximo 20 caracteres de longitud',
    },
})

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'Al menos 4 caracteres de longitud',
        maxLength: 'Como máximo 50 caracteres de longitud',
    },
})

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo no es válido. Debe ser un string',
        format: 'El formato no es válido. Debe ser email',
    },
})

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo no es válido. Debe ser un string',
        format: 'El formato no es válido. Debe contener una mayúscula, una minúscula y un número',
        minLength: 'Al menos 10 caracteres de longitud',
        maxLength: 'Como máximo 25 caracteres de longitud',
    },
})
