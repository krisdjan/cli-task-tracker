import { fs } from '../index.js';
import chalk from 'chalk';

const dataPath = "./data/data.json";

/**
 * Adds new task to the data.json file
 * @param {string} description The description of the task to add
 */  

function addTask(description) {
    let tasks = [];

    //Checks whether the file exists if it does transfers it into a object in an array
    try {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');

        tasks = JSON.parse(fileContent);
    } catch (error) {
        console.log(chalk.bgGray("File wasn't found, creating a new one.."));
        tasks = [];
    }

    //Creates a new task object to be added to the array
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0, //Handles id generation
        taskDescription: description,
        status: false
    }
    tasks.push(newTask);


    //Parses the array back into JSON and writes it
    const updatedFileContent = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(dataPath, updatedFileContent);

    console.log("Added task: " + chalk.green(description));
    
}

export { addTask };