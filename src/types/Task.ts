export interface Task {
    id: string;
    title: string;
    text: string;
    completed: boolean;
    subTasks: Task[];
  }
  