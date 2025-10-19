#!/usr/bin/env node

//Libraries to use
import * as fs from 'fs';
import chalk from 'chalk';
import  { Command } from 'commander';
const program = new Command();
import readline from 'readline';

//Program functions
import { addTask } from './commands/addTask.js';

//Checks whether existing task file exist
const taskFileExists = fs.existsSync('./data/data.json');
if (!taskFileExists) {
    fs.writeFileSync('./data/data.json', '[]', (err) => {
        if(err) throw err;
    });

    console.log(chalk.bgGreen("Task file created"));
}

program
    .name('task-cli')
    .description('Your go to task tracker lmao')
    .version('0.1');


program
    .command('task-cli')
    .description('Run the app in interactive mode')
    .action(()=> {
        console.log("Type 'exit' to " + chalk.red("quit"));

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'task-cli> '
        })

        rl.prompt();

        

        //listen for the user input
        rl.on('line', (line) => {
            const parts = line.trim().split(' ');
            const command = parts[0];
            const args = parts.slice(1);

            switch(command) {
                case 'exit':
                    rl.close();
                    break;
                case 'list':
                    console.log("listing tasks:......");
                    break;
                case 'add':
                    if (args.length === 0) {
                        console.log("example: add <task description>");
                    } else {
                        const task = args.join(' ');
                        addTask(task);
                    }
                    break;
                case 'help':
                    console.log(`
exit............................Exits the application
list............................Lists all the available tasks
add <task description>..........Adds a task to the list
complete <id>...................Marks the task as complete
update <id> <task description>..Overwrites the task with a new description
delete <id>.....................Deletes the task  
                        `);
                    break;
                default:
                    console.log(`Command not recognized: ${command}`);
                    break;
            }

            rl.prompt();

        }).on('close', ()=> {
            console.log(chalk.bgRed("Exiting..."));
            process.exit(0);
        });
    });



program.parse(process.argv);

export { fs };