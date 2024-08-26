import React from "react";
import { text } from "stream/consumers";
import { TaskType } from "types/TaskType";

interface TaskProps{
    task: TaskType,
    active: boolean,
    onClick: () => void
}

const Task:React.FC<TaskProps> = ({task, active, onClick}) => {

    const normalName = (taskName: string) => {
        return  taskName.charAt(0).toUpperCase() + taskName.slice(1).toLowerCase();
    }

    return (
    <li>
        <div className="flex gap-5 bg-[#F7FBFD] w-[calc(50vw_-_2rem)] px-8 py-3 items-center justify-between">
            <div className="flex gap-5 cursor-pointer" onClick={onClick}>
                <svg className={`transition duration-300 w-4 ${active ?"-rotate-90":""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                <p className="font-bold text-xl">{normalName(task.title)}</p>
            </div>
            <label htmlFor={`checkbox-${task.id}`} className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id={`checkbox-${task.id}`}
                    className="hidden"/>
                <span className="w-5 h-5 border rounded-none flex items-center justify-center"></span>
            </label>
        </div>
        {active && 
        <div className="absolute top-0 right-0 bottom-0 bg-[#DCE0E1]">
            <h2 className="text-left px-[2.25rem] pb-[23.4px] py-[2.25rem] text-[18px] font-normal">{task.title}</h2>
            <div className="px-[2.25rem] w-[50vw] font-normal text-left h-[calc(100vh_-_6rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
                {task.text}
            </div>
        </div>}
    </li>
    );
}

export {Task}