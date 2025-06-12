import express, { Router } from 'express'
const app = express()

const router = Router();

router.get('/', (req, res) => {
  res.send('list of products')
})

router.get('/:id', (req, res) => {
  console.log(req)
  res.send('list of products')
})

router.post('/', (req, res) => {
  res.send('new products')
})

export default router;