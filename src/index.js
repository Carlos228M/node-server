import httpServer from '#config/http.js'
import '#config/env.js'
import connectDB from '#config/db.js'

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL

const bootstrap = async () => {
   await connectDB(MONGODB_URL)
   httpServer.listen(PORT, () => console.log(`Servidor HTTP en el puerto ${PORT}`))
}
bootstrap()
