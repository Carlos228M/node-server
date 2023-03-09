import { Router } from 'express'
import { handlerWrapper } from '#lib/handler-wrapper.js'
import userRegisterDTO from '#dtos/userRegister.dto.js'
import userLoginDTO from '#dtos/userLogin.dto.js'
import userUpdateDataDTO from '#dtos/userUpdateData.dto.js'
import userUpdateEmailDTO from '#dtos/userUpdateEmail.dto .js'
import userUpdatePasswordDTO from '#dtos/userUpdatePassword.dto.js'
import userUnregisterDTO from '#dtos/userUnregister.dto.js'
import userJWTDTO from '#dtos/userJwt.dto.js'
import userRegisterController from '#controllers/userRegister.controller.js'
import userLoginController from '#controllers/userLogin.controller.js'
import userProfileController from '#controllers/userProfile.controller.js'
import userUpdatePasswordController from '#controllers/userUpdatePassword.controller.js'
import userUpdateDataController from '#controllers/userUpdateData.controller.js'
import userUpdateEmailController from '#controllers/userUpdateEmail.controller.js'
import userUnregisterController from '#controllers/userUnregister.controller.js'

const userRouter = Router()

userRouter.get(
   '/profile',
   userJWTDTO,
   userProfileController,
   handlerWrapper((req, res, next) => {})
)
userRouter.post(
   '/register',
   userRegisterDTO,
   userRegisterController,
   handlerWrapper((req, res, next) => {})
)
userRouter.post(
   '/login',
   userLoginDTO,
   userLoginController,
   handlerWrapper((req, res, next) => {})
)
userRouter.patch(
   '/update-data',
   userJWTDTO,
   userUpdateDataDTO,
   userUpdateDataController,
   handlerWrapper((req, res, next) => {})
)
userRouter.patch(
   '/update-email',
   userJWTDTO,
   userUpdateEmailDTO,
   userUpdateEmailController,
   handlerWrapper((req, res, next) => {})
)
userRouter.patch(
   '/update-password',
   userJWTDTO,
   userUpdatePasswordDTO,
   userUpdatePasswordController,
   handlerWrapper((req, res, next) => {})
)
userRouter.delete(
   '/unregister',
   userJWTDTO,
   userUnregisterDTO,
   userUnregisterController,
   handlerWrapper((req, res, next) => {})
)

export default userRouter
