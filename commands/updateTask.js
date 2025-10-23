import { fs } from "../index.js";
import { chalk } from "../index.js";
const dataPath = "./data/data.json";
import { getDate } from "./addTask.js";


function updateTask(taskID, prompt) {
    let tasks = [];
    let found = false;

    try {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');
        tasks = JSON.parse(fileContent);
    } catch (error) {
        throw error;        
    }

    tasks.forEach(element => {
        if(element.id == taskID) {
            found = true;
            element.taskDescription = prompt;
            element.updated = getDate();
            console.log("Updated task: " + chalk.yellow(taskID) + " to " + chalk.blue(prompt));
        }
    });

    if(found) {
        const updatedFileContent = JSON.stringify(tasks, null, 2);
        fs.writeFileSync(dataPath, updatedFileContent);
    } else {
        console.log(chalk.red("couldn't find a task with this id"));
    }
    

}

export { updateTask };