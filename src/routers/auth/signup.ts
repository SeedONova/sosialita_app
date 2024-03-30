import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
})

export { router as signupRouter }