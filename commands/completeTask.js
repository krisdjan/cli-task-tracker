import { fs } from '../index.js';
const dataPath = "./data/data.json";
import { chalk } from '../index.js';

const completeTask=(taskID)=> {
    let tasks = [];
    let updatedStatus;
    let updatedTask;
    let found = false;

    try {
        //Parsing file to an array
        const fileContent = fs.readFileSync(dataPath, 'utf-8');
        tasks = JSON.parse(fileContent);

    } catch (error) {

        console.log("something went wrong");
        console.log(error);
    }
    //Searches through each element to find matching id
    tasks.forEach(element => {
        if (element.id == taskID) {
            found = true;

            if(element.status == true) {
                element.status = false;
            } else if (element.status == false) { 
                element.status = true;
            }
            updatedTask = element.taskDescription;
            updatedStatus = element.status;
        }
    });

    const updatedFileContent = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(dataPath, updatedFileContent);

    if(found) {
        console.log("updated task : " + chalk.bgBlue(updatedTask) + " to " + chalk.bgBlue(updatedStatus));
    } else {
        console.log(chalk.red("couldn't find a task with this id"));
    }
    
}

export { completeTask }