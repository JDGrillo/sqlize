const inquirer = require('inquirer')
const models = require('./models')

var questions = [{
    type: 'input',
    name: 'albumQuestionName',
    message: "Album Name?",
},
{
    type: 'number',
    name: 'albumQuestionYear',
    message: "Album Year?",
},
{
    type: 'number',
    name: 'artistQuestionID',
    message: "Artist ID?",
}]

inquirer.prompt(questions).then(answers => {
    models.album.create({albumName: answers['albumQuestionName'], albumYear: answers['albumQuestionYear'], artistID: answers['artistQuestionID']})
})