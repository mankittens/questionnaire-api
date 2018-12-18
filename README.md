## Endpoints

This API supports the following REST call.

### Questionnaire

GET /questionnaire/:id -- get a questionnaire
DELETE /questionnaire/:id -- delete a questionnaire
POST /questionnaire -- create new questionnaire
PUT /questionnaire/:id -- update questionnaire

### Response

GET /response/:id -- get a Response
GET /response/s/for/:id -- get all responses with `for` property equal to `:id` (of a particular questionnaire)
DELETE /response/:id -- delete a response
POST /response -- create new response
PUT /response/:id -- update response
