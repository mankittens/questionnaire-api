const Questionnaire = require('../models/Questionnaire')

function createQuestionnaire(req, res, next) {
  const questionnaire = new Questionnaire(req.body)

  questionnaire.save(err => (err ? next(err) : res.send(questionnaire)))
}

function deleteQuestionnaire(req, res, next) {
  Questionnaire.findByIdAndRemove(req.params.id, (err, questionnaire) =>
    err ? next(err) : res.send(questionnaire)
  )
}

function readQuestionnaire(req, res, next) {
  Questionnaire.findById(req.params.id, (err, questionnaire) =>
    err ? next(err) : res.send(questionnaire)
  )
}

function updateQuestionnaire(req, res, next) {
  Questionnaire.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, questionnaire) => (err ? next(err) : res.send(questionnaire))
  )
}

module.exports = {
  createQuestionnaire,
  deleteQuestionnaire,
  readQuestionnaire,
  updateQuestionnaire,
}
