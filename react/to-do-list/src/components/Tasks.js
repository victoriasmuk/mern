import { useState } from "react";
import { CreateTask } from "./CreateTask";
import { OneTask } from "./OneTask";

export const Tasks = (props) => {
    const [tasks, setTasks] = useState([]);
    const handleTaskCompleteClick = (selectedIdx) => {
        const updatedTasks = tasks.map((task, i) => {
            if(selectedIdx === i){
                task.isComplete = !task.isComplete;
            };
            return task;
        });
        setTasks(updatedTasks);
    };
    const handleTaskDeleteClick = (e, delIdx) => {
        e.stopPropagation();
        setTasks(tasks.filter((_, i) => delIdx !== i));
        };
        
    const addNewTask = (newTask) => {
        setTasks([newTask, ...tasks]);
    };

    return(
        <div>
            <CreateTask addNewTask={addNewTask} />
            <div>
                {tasks !== null && tasks.map((task, taskIdx) => {
                    return(
                        <OneTask
                            key={taskIdx}
                            task={task}
                            taskIdx={taskIdx}
                            handleTaskCompleteClick={handleTaskCompleteClick}
                            handleTaskDeleteClick={handleTaskDeleteClick}
                        />
                    );
                })}
            </div>
        </div>
    );
};