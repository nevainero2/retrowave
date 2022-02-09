import { Request, Response } from 'express'

const musicService = require('../data/music-service')

const { Router } = require('express')

const router = Router()

router.get('/song/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const song = musicService.getMusicById(Number(id))
  res.sendFile(song.path)
})

router.get('/img/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const song = musicService.getMusicById(Number(id))
  res.sendFile(song.imgPath)
})

router.get('/info/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const { name, album } = musicService.getMusicById(Number(id))
  res.json({ name, album })
})

router.get('/size', (req: Request, res: Response) => {
  res.json({ size: musicService.size })
})

module.exports = router
