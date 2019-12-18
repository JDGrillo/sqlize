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
    albumNameResult = answers['albumQuestionName']
    albumYearResult = answers['albumQuestionYear']
    artistIDResult = answers['artistQuestionID']
    models.album.create({albumName: albumNameResult, albumYear: albumYearResult, artistID: artistIDResult})
})