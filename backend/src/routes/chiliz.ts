import { Router } from 'express'

import * as chiliz from '../controller/chiliz'

const router = Router()

router.post('/start', async(req, res) => chiliz.startIndexer(req, res))
router.post('/stop', async(req, res) => chiliz.stopIndexer(req, res))
router.post('/validate', async(req, res) => chiliz.checkTransactionValidation(req, res))
router.get('/value', async(req, res) => chiliz.getChilizAmount(req, res))

export default router
