import { Request, Response, Router } from 'express'

import logger from '@middlewares/logger'

const router = Router()

router.get('/hello', (_: Request, res: Response) => {
    logger.info(`Request recebida`)
    res.json({ message: 'Hello World' })
})

export default router