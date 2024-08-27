import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TaskType } from "types/TaskType";

interface TaskProps{
    task: TaskType,
    active: boolean,
    onToggleTask: () => void,
    onToggleChecked: () => void,
    checked: boolean
}

const Task:React.FC<TaskProps> = ({task, active, onToggleTask, onToggleChecked, checked}) => {

    const normalName = (taskName: string) => {
        return  taskName.charAt(0).toUpperCase() + taskName.slice(1).toLowerCase();
    }

    return (
    <li>
        <div className="flex gap-5 bg-[#F7FBFD] w-[calc(50vw_-_2rem)] px-8 py-3 items-center justify-between">
            <div className="flex gap-5 cursor-pointer items-center" onClick={onToggleTask}>
                <FontAwesomeIcon className={`transition duration-300 h-6 ${active ?"-rotate-90":""}`} icon={faAngleRight} />
                <p className="font-bold text-xl">{normalName(task.title)}</p>
            </div>
            <label htmlFor={`checkbox-${task.id}`} className="flex items-center cursor-pointer">
                <input
                    checked={checked}
                    type="checkbox"
                    id={`checkbox-${task.id}`}
                    className="hidden"
                    onClick={onToggleChecked}/>
                <span className={`w-5 h-5 border rounded-[1px] flex items-center justify-center ${checked && "bg-blue-500 border-blue-500 border-4 w-6 h-6"}`}>{checked && <FontAwesomeIcon className="text-white" icon={faCheck} />}</span>
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