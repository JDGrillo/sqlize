const inquirer = require('inquirer')
const models = require('./models')

var questions = [{
    type: 'input',
    name: 'artistQuestionName',
    message: "Artist Name?",
}]

inquirer.prompt(questions).then(answers => {
    models.artist.create({artistName: answers['artistQuestionName']})
})