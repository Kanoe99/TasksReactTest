import { useState } from "react";

import { TaskType } from "types/TaskType";

import {Task} from "components/Task";
import initialTasks from "data/data.json";

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks as TaskType[]);
    const [active, setActive] = useState<string|null>(null);
    const [opened, setOpened] = useState<string|null>(null);
    const [checked, setChecked] = useState<string[]>([""]);

    const toggleTask = (taskId: string) => {
        setActive((prev)=>(prev === taskId ? null : taskId))
     }

     const handleOpened = (taskId:string) => {
        setOpened((prev)=>(prev === taskId ? null : taskId))
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
                    task={task}

                    checked={checked.includes(task.id)}
                    active={task.id===active}
                    opened={task.id===opened}

                    onToggleTask={()=>{
                        toggleTask(task.id);
                    }}
                    onToggleChecked={()=>{
                        modifyChecked(task.id);
                    }}
                    toggleOpened={()=>{
                        handleOpened(task.id);
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