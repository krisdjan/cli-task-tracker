import { fs } from '../index.js';
import chalk from 'chalk';


const dataPath = "./data/data.json";

function filteredTask(inputStatus) {
    let tasks = [];
    let boolean = false;
    if (inputStatus == "done") boolean = true;

    try {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');

        tasks = JSON.parse(fileContent);
    } catch (error) {
        throw error;
    }

    let results = [];

    tasks.forEach(element => {
        if(element.status == boolean) {
            results.push(element);
        }
    });
 
    if(results.length > 0) {
        results.forEach(element => {
            let output = chalk.blue(element.taskDescription) + ' id: ' + chalk.yellow(element.id) + " status: ";
            if (element.status == true) {
                output += chalk.green("done");
            } else {
                output += chalk.red("undone");
            }
            console.log(output);
        });
    } else {
        return console.log(chalk.yellow("couldn't find any results"));
    }


}

export { filteredTask };