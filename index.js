const inquirer = require('inquirer');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require ("../lib/Manager.js");
const Employee = require('./lib/Employee.js');

function Profile() {
    this.engineer;
    this.intern;
    this.manager;
}

Profile.prototype.initializeProfile = function () {
    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is the name of your '
    })
}



///// 1/30/20 12:51pm
// istalled dependencies, ran first failed test in employee.test. Added constructor to employee.j
// thoughts on how to go about this:
//   - create the inquirer prompts in each page: Employee, engineer, intern, manager? 
    //  or set up one prompt and have when questions. Take answers to generate a page. Some how add functions???