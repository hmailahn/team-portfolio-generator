const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');
const fs = require('fs');
const pageTemplate = require('./dist/pageTemplate');

//array of employees to push data too
var employees = [];
// function Profile() {
//     this.engineer;
//     this.intern;
//     this.manager;
// }

//Make manager profile
const managerProfile = function () {
    // prompts for manager
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You need to enter an id!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email address of the employee?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You need to enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the office number of the employee?',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log('You need to enter an office number!');
                    return false;
                }
            }
        },
    ])
    //asynchronously takes data to generate profile and then goes to menu
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
       
      
    })
};




///menu
const menu = function () {
    //select engineer, intern, or finish team
    inquirer.prompt([
        {
        type: 'list',
        message: 'What employee would you like to add?',
        name: 'role',
        choices: ['Engineer', 'Intern']
        },
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You need to enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email address of the employee?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is GitHub username of employee?',
            when: (input) => input.role === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You need to enter a github username!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Where does the intern attend school?',
            when: (input) => input.role === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('You need to enter a school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
    .then(employeesData => {
        let { name , id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employees.push(employee);

        if(confirmAddEmployee) {
            return menu(employees)
        } else {
            return employees;
        }
    })
    
};


const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Page created! Check out index.html")
        }
    })

}

// new Profile().managerProfile(); ????????
managerProfile()
.then(menu)
.then(employees => {
return pageTemplate(employees)
}).then(indexPage => {
    return writeFile(indexPage);
})


///// 1/30/20 12:51pm
// istalled dependencies, ran first failed test in employee.test. Added constructor to employee.j
// 1"09pm thoughts on how to go about this:
//   - create the inquirer prompts in each page: Employee, engineer, intern, manager?
    //  or set up one prompt and have when questions. Take answers to generate a page. Some how add functions???
    /// added initial inquier....
/// 2:26pm - 
//Next: start working generate profile? figure out how to create New engineer and intern. use js fies... 
/// need to back up and have employee prompts, then mannager, then engineer, then intern?? for testing purposes?
//consider moving prompts to employee.js
// 3:18pm 
// -added validations to each prompt, added functions and constructors to intern, engineer, manager, and employee js
// consider moving questions to employeee profile and use this to generate html??
// 2/1/20 - to do 
//1:19pm - delete employee test
//1:38 created failed tests, need to figure how out to pass inter, enginner, and manager. I think it's with the prompts...
/// 2:52 - template questions work, able to add more than one object (engineer, intern)
// console.loged and worked. Now need to figure out how to take info display"


// 2/4/2022
// creating fiunction to move to pagetemplate.js and will write html code in there. need html and javascript to append employees
//consider doing .managerProfile().then ....