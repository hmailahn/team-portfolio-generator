const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name);
        super(id);
        super(email);
        this.github = github;
    }
    getGithub(){
        return `https://github.com/${data.github}`///might need to change this
    }
    getRole(){
        return 'Engineer';
    }
    
}
module.exports = Engineer; ///might need to change this