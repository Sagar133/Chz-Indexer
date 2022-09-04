import { Router } from 'express'
import chiliz from "./chiliz"

const bodyParser = require('body-parser')
const router = Router()

router.get('/status', (_request, response) => {
  response.json({
    name: 'Chiliz Indexer',
    note: 'developed by Sagar Behara',
    online: process.uptime(),
    version: 'v.0.1'
  })
})

router.use(bodyParser.json({ limit: '100mb' }))
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use('/api', chiliz)


export default router