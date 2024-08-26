import { useState } from "react";

import { TaskType } from "types/TaskType";

import {Task} from "components/Task";
import initialTasks from "data/data.json";

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks as TaskType[]);
    const [activeTaskId, setActiveTaskId] = useState<string|null>(null);

    const toggleTask = (taskId: string) => {
       setActiveTaskId((prev) => (prev === taskId ? null : taskId));
    }

    return (
    <section className="py-4 px-6 bg-white min-h-[100vh] h-fit">
        <ul>
            {
                tasks.map((task)=>{
                    return <Task task={task} active={task.id===activeTaskId} onClick={()=>toggleTask(task.id)}/>
                })
            }
            {/* <Task/> */}
        </ul>
    </section>
    );
}

export {TaskList};