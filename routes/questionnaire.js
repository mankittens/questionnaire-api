const { Router } = require('express')
const {
  createQuestionnaire,
  deleteQuestionnaire,
  readQuestionnaire,
  updateQuestionnaire,
} = require('../controllers/questionnaire')

const router = Router()

router.get('/:id', readQuestionnaire)
router.delete('/:id', deleteQuestionnaire)
router.post('/', createQuestionnaire)
router.put('/:id', updateQuestionnaire)

module.exports = router
