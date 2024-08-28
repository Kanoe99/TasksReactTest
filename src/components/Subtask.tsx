import React from "react";
import { TaskType } from "types/TaskType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SubtaskProps {
    task: TaskType;
    active: boolean;
    checked: boolean;
    activeSubtaskId: string | null;
    onSubtaskClick: (subtaskId: string) => void;
}

const Subtask: React.FC<SubtaskProps> = ({
    task,
    active,
    checked,
    activeSubtaskId,
    onSubtaskClick,
}) => {
    const normalName = (taskName: string) =>
        taskName.charAt(0).toUpperCase() + taskName.slice(1).toLowerCase();

    const isActive = activeSubtaskId === task.id;

    return (
        <>
            <li
                className={`relative flex gap-5 w-[calc(50vw_-_2rem)] px-8 py-3 items-center justify-between ${
                    isActive ? "bg-[#F7FBFD]" : ""
                }`}
            >
                <p
                    className="text-xl font-normal absolute left-16 cursor-pointer"
                    onClick={() => onSubtaskClick(task.id)}
                >
                    {normalName(task.title)}
                </p>
                <label
                    htmlFor={`checkbox-${task.id}`}
                    className="flex items-center cursor-pointer ml-auto"
                >
                    <input
                        checked={checked}
                        type="checkbox"
                        id={`checkbox-${task.id}`}
                        className="hidden"
                        onClick={() => onSubtaskClick(task.id)}
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
            </li>
            {isActive && (
                <div className="absolute top-0 right-0 bottom-0 bg-[#E8F0F2]">
                    <h2 className="text-left px-[2.25rem] pb-[23.4px] py-[2.25rem] text-[18px] font-normal">
                        {task.title}
                    </h2>
                    <div className="px-[2.25rem] w-[50vw] font-normal text-left h-[calc(100vh_-_6rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
                        {task.text}
                    </div>
                </div>
            )}
        </>
    );
};

export { Subtask};
