import { Type } from '@sinclair/typebox'
export const idDTOSchema = Type.String({
   format: 'uuid' /*
         errorMessage: {
            type: 'El tipo de _id no es válido, debe ser un string',
            format: 'El formato de _id no es válido, debe ser un uuid4'
         } */
})
export const nameDTOSchema = Type.String({
   minLength: 2,
   maxLength: 20 /*
         errorMessage: {
            minLength: 'name debe tener al menos 2 caracteres',
            maxLength: 'name no debe tener más de 20 caracteres'
         } */
})
export const surnameDTOSchema = Type.String({
   minLength: 4,
   maxLength: 50 /*
         errorMessage: {
            minLength: 'surname debe tener al menos 4 caracteres',
            maxLength: 'surname no debe tener más de 50 caracteres'
         } */
})
export const emailDTOSchema = Type.String({
   format: 'email' /*
         errorMessage: {
            type: 'El tipo de email no es válido, debe ser un string',
            format: 'El formato de email no es válido, debe ser un email xxx@xxx.xxx'
         } */
})
export const passwordDTOSchema = Type.String({
   format: 'password',
   minLength: 10,
   maxLength: 25
   /*
         errorMessage: {
            type: 'El tipo de email no es válido, debe ser un string',
            format: 'Debe tener al menos una minúscula, una mayúscula y un número',
            minLength: 'password debe tener al menos 10 caracteres',
            maxLength: 'password no debe tener más de 25 caracteres'
         }
         */
})
