const { Router } = require('express')
const {
  createResponse,
  deleteResponse,
  readResponse,
  readResponsesFor,
  updateResponse,
} = require('../controllers/response')

const router = Router()

router.get('/:id', readResponse)
router.get('/s/for/:id', readResponsesFor)
router.delete('/:id', deleteResponse)
router.post('/', createResponse)
router.put('/:id', updateResponse)

module.exports = router
