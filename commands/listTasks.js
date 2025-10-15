import * as fs from 'fs';

const listTasks =()=> {
    fs.readFile("data.json", (error, data) => {

            if(error) {
                console.error(error);

                throw error;
            }
            const tasks = JSON.parse(data);

            console.log(tasks);
            let listOfTasks = [];
        })
}


export { listTasks };