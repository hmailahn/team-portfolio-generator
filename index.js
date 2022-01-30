const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');


function Profile() {
    this.engineer;
    this.intern;
    this.manager;
}

//Make manager profile
Profile.prototype.managerProfile = function () {
    // prompts for manager
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email address of the employee?'
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the office number of the employee?'
        },
    ])
    //asynchronously takes data to generate profile and then goes to menu
    .then(managerData => {
        generateProfile(managerData);
        this.menu();
     });

};

///menu
Profile.prototype.menu = function () {
    //select engineer, intern, or finish team
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add engineer', 'Add intern', 'Finish building my team']
    })
    // asynchronously takes action and goes to engineerProfile, internProfile or buildteam
    .then(({ action }) => {
        if (action === 'Add engineer') {
            return this.engineerProfile(); ///or super? - refer to jest.another.rpg
        } else if (action === 'Add intern') {
            return this.internProfile();
        } else if (action === 'Finish building my team') {
            return this.buildTeam();
        }
    });
};

//build engineer profile
Profile.prototype.engineerProfile = function () {
    //prompts
    inquirer.prompt([
        {
            type: 'text',
            name: 'engineerName',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'text',
            name: 'engineerId',
            message: 'What is the employee ID?'
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: 'What is the email address of the employee?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is GitHub username of employee?'
        },
    ])
    //asynchronously take data to generate profile and go back to menu
    .then(engineerData => {
        generateProfile(engineerData);
        this.menu();
     });
};

Profile.prototype.internProfile = function() {
      //prompts
      inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: 'What is the name of the intern?'
        },
        {
            type: 'text',
            name: 'internId',
            message: 'What is the employee ID?'
        },
        {
            type: 'text',
            name: 'internEmail',
            message: 'What is the email address of the employee?'
        },
        {
            type: 'text',
            name: 'school',
            message: 'Where does the intern attend school?'
        },
    ])
    //asynchronously take data to generate profile and go back to menu
    .then(internData => {
        generateProfile(internData);
        this.menu();
     });
}


//takes data from manager, engineer, and intern to build index html portfolio
Profile.prototype.generateProfile = function (managerData, engineerData, internData) {
// this.engineer = new Engineer(data?)look at jest another rpg
}
// new Profile().managerProfile(); ????????
new Profile().managerProfile();


///// 1/30/20 12:51pm
// istalled dependencies, ran first failed test in employee.test. Added constructor to employee.j
// 1"09pm thoughts on how to go about this:
//   - create the inquirer prompts in each page: Employee, engineer, intern, manager?
    //  or set up one prompt and have when questions. Take answers to generate a page. Some how add functions???
    /// added initial inquier....


