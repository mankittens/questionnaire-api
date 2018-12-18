const { Schema, model } = require('mongoose')

const QuestionnaireSchema = new Schema({
  displayName: { type: String, required: true },
  sections: [
    {
      displayName: { type: String, required: true },
      questions: [
        {
          type: { type: String, enum: ['freetext', 'multi'], required: true },
          text: { type: String, required: true },
          options: [
            {
              text: { type: String, required: true },
            },
          ],
        },
      ],
    },
  ],
})
const Questionnaire = model('Questionnaire', QuestionnaireSchema)

module.exports = Questionnaire
