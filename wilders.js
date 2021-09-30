const collegue = [
    {name: "Nelson"},
    {name: "Arthur"},
    {name: "Mathieu"},
    {name: "Clément"},
]

let chalk = require('chalk');

console.log(chalk.blue(collegue[0].name));
console.log(chalk.red(collegue[1].name));
console.log(chalk.green(collegue[2].name));
console.log(chalk.yellow(collegue[3].name));