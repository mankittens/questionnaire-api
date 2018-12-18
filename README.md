## Endpoints

This API supports the following REST calls.

### Questionnaire

GET /questionnaire/:id -- read questionnaire
DELETE /questionnaire/:id -- delete questionnaire
POST /questionnaire -- create new questionnaire
PUT /questionnaire/:id -- update questionnaire

### Response

GET /response/:id -- read response
GET /response/s/for/:id -- read all responses with `for` property equal to `:id` (of a particular questionnaire)
DELETE /response/:id -- delete response
POST /response -- create new response
PUT /response/:id -- update response
