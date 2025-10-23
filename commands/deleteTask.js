import { fs } from '../index.js';
import { chalk } from "../index.js";
const dataPath = './data/data.json';


function deleteTask(taskID) {
    let tasks = [];
    let idCount = 0;
    let found = false;
    let description;

    try {
        let fileContent = fs.readFileSync(dataPath, 'utf-8');
        tasks = JSON.parse(fileContent);    
    } catch (error) {
        throw error;
    }


    tasks.forEach(element => {
        if (element.id == taskID) {
            found = true;
            tasks.splice(idCount, 1);
            description = element.taskDescription;
        }
        idCount++;
    });

    if(found) {
        const updatedFileContent = JSON.stringify(tasks, null, 2);
        fs.writeFileSync(dataPath, updatedFileContent);
        console.log("successfully deleted task: " + chalk.blue(description));
    } else {
        console.log(chalk.red("couldn't find a task with this id"));
    }

}

export { deleteTask };