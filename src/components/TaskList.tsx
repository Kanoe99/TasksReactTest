import { useState } from "react";
import { TaskType } from "types/TaskType";
import { Task } from "components/Task";
import initialTasks from "data/data.json";

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks as TaskType[]);
    const [opened, setOpened] = useState<string | null>(null);
    const [checked, setChecked] = useState<string[]>([]);
    const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

    const toggleTask = (taskId: string) => {
        setOpened((prev) => (prev === taskId ? null : taskId));
        setActiveTaskId(taskId); // Set the clicked task as active
    };

    const toggleOpened = (taskId: string) => {
        setOpened((prev) => (prev === taskId ? null : taskId));
    };

    const modifyChecked = (taskId: string) => {
        setChecked((prev) => {
            if (prev.includes(taskId)) {
                return prev.filter((id) => id !== taskId);
            } else {
                return [...prev, taskId];
            }
        });
    };

    const handleSubtaskClick = (subtaskId: string) => {
        setActiveTaskId(subtaskId); // Set the clicked subtask as active
    };

    return (
        <section className="py-4 px-6 bg-white min-h-[100vh] h-fit">
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        active={task.id === activeTaskId}
                        checked={checked.includes(task.id)}
                        opened={task.id === opened}
                        onToggleTask={() => toggleTask(task.id)}
                        onToggleChecked={() => modifyChecked(task.id)}
                        onSubtaskClick={handleSubtaskClick}
                        activeTaskId={activeTaskId}
                        toggleOpened={() => toggleOpened(task.id)} // Pass the function here
                    />
                ))}
            </ul>
        </section>
    );
};

export { TaskList };
