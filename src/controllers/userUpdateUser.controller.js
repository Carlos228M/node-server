import UserModel from '#schemas/user.schema.js'

const userUpdateUserController = async (req, res) => {
    const { name, surname } = req.body
    const { id } = req

    console.log(id)

    const existingUserById = await UserModel.findById(id).exec()
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] })

    existingUserById.name = name
    existingUserById.surname = surname

    await existingUserById.save()
    return res.send('Usuario actualizado')
}
export default userUpdateUserController
