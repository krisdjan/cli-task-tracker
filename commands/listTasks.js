import { fs } from "../index.js";
const dataPath = "./data/data.json";
import { chalk } from "../index.js";

function listTasks() {
    let tasks = [];

    try {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');
        tasks = JSON.parse(fileContent);
    } catch (error) {
        return console.log(error);
    }

    if(tasks.length > 0) {
        tasks.forEach(element => {
            let output = chalk.blue(element.taskDescription) + ' ' + chalk.yellow(element.id);
            if (element.status == true) {
                output += chalk.green(" done");
            } else {
                output += chalk.red(" undone");
            }
            console.log(output);
        });
    } else {
        return console.log(chalk.yellow("you currently don't have any active tasks\nadd new tasks by using add <task description>"));
    }

}

export { listTasks }