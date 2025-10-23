import { fs } from "../index.js";
import { chalk } from "../index.js";
const dataPath = "./data/data.json";

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
            let output = chalk.blue(element.taskDescription) + ' id: ' + chalk.yellow(element.id) + " status: ";
            if (element.status == true) {
                output += chalk.green("done");
            } else {
                output += chalk.red("undone");
            }
            console.log(output);
        });
    } else {
        return console.log(chalk.yellow("you currently don't have any active tasks\nadd new tasks by using add <task description>"));
    }

}

export { listTasks }