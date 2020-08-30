const Router = require('express').Router
const router = new Router()

const client = require('./model/client/router')
const enrollment = require('./model/enrollment/router')
const discipline = require('./model/discipline/router')
const course = require('./model/course/router')
const user = require('./model/user/router')
const student = require('./model/student/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to sga-api API!' })
})

router.use('/client', client)
router.use('/enrollment', enrollment)
router.use('/discipline', discipline)
router.use('/course', course)
router.use('/user', user)
router.use('/student', student)

module.exports = router
