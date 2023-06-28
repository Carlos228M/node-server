import userLoginController from '#controllers/userLogin.controller.js'
import userProfileController from '#controllers/userProfile.controller.js'
import userRegisterController from '#controllers/userRegister.controller.js'
import userUnregisterController from '#controllers/userUnregister.controller.js'
import userUpdateEmailController from '#controllers/userUpdateEmail.controller.js'
import userUpdatePasswordController from '#controllers/userUpdatePassword.controller.js'
import userUpdateUserController from '#controllers/userUpdateUser.controller.js'
import userJWTDTO from '#dto/userJWT.dto.js'
import userLoginDTO from '#dto/userLogin.dto.js'
import userRegisterDTO from '#dto/userRegister.dto.js'
import userUnregisterDTO from '#dto/userUnregister.dto.js'
import userUpdateEmailDTO from '#dto/userUpdateEmail.dto.js'
import userUpdatePasswordDTO from '#dto/userUpdatePassword.dto.js'
import userUpdateUserDTO from '#dto/userUpdateUser.dto.js'
import { Router } from 'express'
const userRouter = Router()

userRouter.post('/register', userRegisterDTO, userRegisterController)
userRouter.post('/login', userLoginDTO, userLoginController)
userRouter.get('/profile', userJWTDTO, userProfileController)
userRouter.patch(
    '/update-user',
    userJWTDTO,
    userUpdateUserDTO,
    userUpdateUserController
)
userRouter.patch(
    '/update-email',
    userJWTDTO,
    userUpdateEmailDTO,
    userUpdateEmailController
)
userRouter.patch(
    '/update-password',
    userJWTDTO,
    userUpdatePasswordDTO,
    userUpdatePasswordController
)
userRouter.delete(
    '/unregister',
    userJWTDTO,
    userUnregisterDTO,
    userUnregisterController
)

export default userRouter
