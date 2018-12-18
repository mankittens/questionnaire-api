const { Schema, model } = require('mongoose')

const ResponseSchema = new Schema({
  by: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  at: { type: Date, required: true, default: Date.now },
  for: { type: Schema.Types.ObjectId, ref: 'Questionnaire', required: true },
  sections: [
    {
      answers: [
        {
          answer: { type: String, required: true },
        },
      ],
    },
  ],
})
const Response = model('Response', ResponseSchema)

module.exports = Response
