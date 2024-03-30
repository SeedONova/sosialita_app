import { Router, Response, Request, NextFunction } from 'express'
import Post from '../../models/post'

const router = Router()

router.get('/api/post/show/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if(!id){
        const allPost = await Post.find();
        return res.status(200).send(allPost)
    }

    const post = await Post.findOne({ _id: id })

    res.status(200).send(post)
})

export { router as showPostRouter }