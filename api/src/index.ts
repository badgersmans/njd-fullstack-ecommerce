import express, { Router } from 'express'
import productRoutes from './routes/products/index'

const app = express()
const port = 3000

app.use('/products', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})