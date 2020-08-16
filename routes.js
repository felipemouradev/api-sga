const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const student = require('./model/student/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to sga-api API!' })
})

router.use('/user', user)
router.use('/student', student)

module.exports = router
