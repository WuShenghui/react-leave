import { Router } from 'express'

const router = Router()

// For our SPA
router.get('/', (req, res, next) => {
  res.render('index', {
    title: '假期申請表'
  })
})

router.get('/leaveType', (req, res, next) => {
  const leaveTypes = { data: ["有薪年假", "病假", "補假", "無薪假", "分娩假", "婚假", "恩恤假", "其他"] }
  res.status(200).send(leaveTypes)
})

export default router
