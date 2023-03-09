import Ajv from 'Ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addFormats(ajv, ['email', 'uuid'])
addErrors(ajv)

export default ajv
