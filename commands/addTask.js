import { fs } from '../index.js';

const dataPath = "./data/data.json";

let taskId = 0;

/**
 * Adds new task to the data.json file
 * @param {string} description The description of the task to add
 */  
function addTask(description) {
    taskId++;
    let tasks = [];

    //Checks whether the file exists if it does it transfers it into a object in an array
    try {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');

        tasks = JSON.parse(fileContent);
    } catch (error) {
        console.log(error);
        tasks = [];
    }

    //Creates a new task object to be added to the array
    const newTask = {
        id: taskId,
        taskDescription: description,
        completed: false
    }
    tasks.push(newTask);


    //Parses the array back into JSON and writes it
    const updatedFileContent = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(dataPath, updatedFileContent);

    console.log(`Added task: ${description}`);
    
}

export { addTask };