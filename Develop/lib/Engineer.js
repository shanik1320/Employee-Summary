// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHubUser) {
        super(name, id, email)
        this.githubUsername = GitHubUser;
    }
    getGithub(){
        return this.githubUsername
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer