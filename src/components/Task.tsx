import React, { useState } from "react";
import { TaskType } from "types/TaskType";
import { SubtaskList } from "./SubtaskList";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TaskProps {
    task: TaskType;
    active: boolean;
    checked: boolean;
    opened: boolean;
    onToggleTask: () => void;
    onToggleChecked: () => void;
    onSubtaskClick: (subtaskId: string) => void;
    activeTaskId: string | null;
    toggleOpened: () => void;
}

const Task: React.FC<TaskProps> = ({
    task,
    active,
    checked,
    opened,
    onToggleTask,
    onToggleChecked,
    onSubtaskClick,
    activeTaskId,
    toggleOpened,
}) => {
    const [activeSubtaskId, setActiveSubtaskId] = useState<string | null>(null);

    const handleSubtaskClick = (subtaskId: string) => {
        setActiveSubtaskId((prev) => (prev === subtaskId ? null : subtaskId));
    };

    const normalName = (taskName: string) =>
        taskName.charAt(0).toUpperCase() + taskName.slice(1).toLowerCase();

    return (
        <li className={`mb-2 ${active ? "bg-[#F7FBFD]" : ""}`}>
            <div
                className={`relative flex gap-5 w-[calc(50vw_-_2rem)] px-8 py-3 items-center justify-between`}
            >
                <div className="flex items-center gap-5 cursor-pointer">
                    {task.subTasks.length > 0 && (
                        <span onClick={toggleOpened}>
                            <FontAwesomeIcon
                                className={`transition duration-300 !p-0 h-6 ${opened ? "-rotate-90" : ""}`}
                                icon={faAngleRight}
                            />
                        </span>
                    )}
                    <p
                        className="text-xl font-bold absolute left-16"
                        onClick={onToggleTask}
                    >
                        {normalName(task.title)}
                    </p>
                </div>
                <label
                    htmlFor={`checkbox-${task.id}`}
                    className="flex items-center cursor-pointer ml-auto"
                >
                    <input
                        checked={checked}
                        type="checkbox"
                        id={`checkbox-${task.id}`}
                        className="hidden"
                        onClick={onToggleChecked}
                    />
                    <span
                        className={`w-5 h-5 border rounded-[1px] flex items-center justify-center ${
                            checked &&
                            "bg-blue-500 border-blue-500 border-4 w-5 h-5"
                        }`}
                    >
                        {checked && (
                            <FontAwesomeIcon
                                className="text-white"
                                icon={faCheck}
                            />
                        )}
                    </span>
                </label>
            </div>
            {task.subTasks.length > 0 && opened && (
                <SubtaskList
                    subtasks={task.subTasks}
                    active={active}
                    activeSubtaskId={activeSubtaskId}
                    onSubtaskClick={handleSubtaskClick}
                    checkedSubtasks={[]}
                />
            )}
            {active && !activeSubtaskId && (
                <div className="absolute top-0 right-0 bottom-0 bg-[#DCE0E1]">
                    <h2 className="text-left px-[2.25rem] pb-[23.4px] py-[2.25rem] text-[18px] font-normal">
                        {task.title}
                    </h2>
                    <div className="px-[2.25rem] w-[50vw] font-normal text-left h-[calc(100vh_-_6rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
                        {task.text}
                    </div>
                </div>
            )}
        </li>
    );
};

export { Task };
