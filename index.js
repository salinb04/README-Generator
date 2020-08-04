var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');
var api = require('./utils/api');

// The list of questions to present

/*
 * At least one badge ??
 * Project title
 * Description
 * Table of Contents
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions
 * User GitHub profile picture
 * User GitHub email
 */

// type: 'editor'
const questions = [{
        type: "input",
        name: "title",
        message: "Please enter title: "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description: "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter GitHub username: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation information: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information: "
    },
    {
        type: "input",
        name: "credits",
        message: "Please enter credits: "
    },
    {
        type: "input",
        name: "license",
        message: "Please enter license information: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contributors: "
    },
    {
        type: "input",
        name: "author",
        message: "Please enter author: "
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Error ", err);
        }
    })
}

async function init() {
    // Iterate and ask questions
    const answers = await inquirer.prompt(questions);

    // Get GitHub info
    const profile = await api.getUser(answers.username);

    const data = {
        ...answers,
        ...profile
    }

    // Generate MD
    var markdown = generateMarkdown(data);

    // Write MD
    writeToFile('sample.md', markdown)
}

init();