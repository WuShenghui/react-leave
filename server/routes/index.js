import { Router } from 'express'

const router = Router()

// For our SPA
router.get('*', (req, res, next) => {
  res.render('index', {
    title: '假期申請表'
  })
})

export default router
