import httpServer from '#config/http.js'
import '#config/env.js'
import connectDB from '#config/db.js'

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () => {
        console.log('Servidor escuchando en el puerto ' + process.env.PORT)
    })
}

bootstrap()
