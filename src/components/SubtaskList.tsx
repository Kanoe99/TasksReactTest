import React from "react";
import { TaskType } from "types/TaskType";
import { Subtask } from "./Subtask";

interface SubtaskListProps {
    subtasks: TaskType[];
    active: boolean;
    activeSubtaskId: string | null;
    onSubtaskClick: (subtaskId: string) => void;
    checkedSubtasks: string[];
}

const SubtaskList: React.FC<SubtaskListProps> = ({
    subtasks,
    active,
    activeSubtaskId,
    onSubtaskClick,
    checkedSubtasks,
}) => {
    return (
        <ul>
            {subtasks.map((subtask) => (
                <Subtask
                    key={subtask.id}
                    task={subtask}
                    active={active}
                    activeSubtaskId={activeSubtaskId}
                    onSubtaskClick={onSubtaskClick}
                    checked={checkedSubtasks.includes(subtask.id)}
                />
            ))}
        </ul>
    );
};

export { SubtaskList };
