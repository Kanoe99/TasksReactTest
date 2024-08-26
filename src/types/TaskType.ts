export interface TaskType {
    id: string;
    title: string;
    text: string;
    completed: boolean;
    subTasks: TaskType[];
  }