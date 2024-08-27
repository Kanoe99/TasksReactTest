import { useState } from "react";

import { TaskType } from "types/TaskType";

import {Task} from "components/Task";
import initialTasks from "data/data.json";

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks as TaskType[]);
    const [activeTaskId, setActiveTaskId] = useState<string|null>(null);
    const [checked, setChecked] = useState<string[]>([""]);

    const toggleTask = (taskId: string) => {
        setActiveTaskId((prev) => (prev === taskId ? null : taskId));
     }

     const modifyChecked = (taskId: string) => {
        setChecked((prev) => {
            if (prev.includes(taskId)) {
                return prev.filter(id => id !== taskId);
            } else {
                return [...prev, taskId];
            }
        });
        
     }

    return (
    <section className="py-4 px-6 bg-white min-h-[100vh] h-fit">
        <ul>
            {
                tasks.map((task)=>{
                    return <Task 
                    checked={checked.includes(task.id)}
                    task={task}
                    active={task.id==activeTaskId}
                    onToggleTask={()=>{
                        toggleTask(task.id);
                    }}
                    onToggleChecked={()=>{
                        modifyChecked(task.id);
                    }}
                    />
                })
            }
            {/* <Task/> */}
        </ul>
    </section>
    );
}

export {TaskList};