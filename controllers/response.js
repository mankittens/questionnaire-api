const Response = require('../models/response')

function createResponse(req, res, next) {
  const response = new Response(req.body)

  response.save(err => (err ? next(err) : res.send(response)))
}

function deleteResponse(req, res, next) {
  Response.findByIdAndRemove(req.params.id, (err, response) =>
    err ? next(err) : res.send(response)
  )
}

function readResponse(req, res, next) {
  Response.findById(req.params.id, (err, response) =>
    err ? next(err) : res.send(response)
  )
}

function readResponsesFor(req, res, next) {
  Response.find({ for: req.params.id }, (err, response) =>
    err ? next(err) : res.send(response)
  )
}

function updateResponse(req, res, next) {
  Response.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, response) => (err ? next(err) : res.send(response))
  )
}

module.exports = {
  createResponse,
  deleteResponse,
  readResponse,
  readResponsesFor,
  updateResponse,
}
