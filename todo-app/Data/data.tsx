import AsyncStorage from '@react-native-async-storage/async-storage';


export type Props = {
    id: number,
    title: string,
    description: string,
    date: string,
    status: Status,
    priority: Priority,
    Opacity?: number,
};

// Enum des statuts
export enum Status {
    Waiting = "waiting",
    InProgress = "in progress",
    Finished = "finished",
    Cancelled = "cancelled",
}

// Enum des statuts
export enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high",
    Urgent = "urgent",
}

// Couleurs associées aux statuts
export const StatusColors: Record<Status, string> = {
    [Status.Waiting]: "#F6AD55",
    [Status.InProgress]: "#4299E1",
    [Status.Finished]: "#48BB78",
    [Status.Cancelled]: "#FC8181",
}

export const tasks: Props[] = [
    {
        id: 1,
        title: "Task 1",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Waiting,
        priority: Priority.Low,
    },
    {
        id: 2,
        title: "Task 2",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.InProgress,
        priority: Priority.Medium,
    },
    {
        id: 3,
        title: "Task 3",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Finished,
        priority: Priority.High,
    },
    {
        id: 4,
        title: "Task 4",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Cancelled,
        priority: Priority.Urgent,
        Opacity: 0.5,
    },
    {
        id: 5,
        title: "Task 5",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Waiting,
        priority: Priority.High,
    },
    {
        id: 6,
        title: "Task 6",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.InProgress,
        priority: Priority.Medium,
    },
    {
        id: 7,
        title: "Task 7",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Finished,
        priority: Priority.Low,
    },
    {
        id: 8,
        title: "Task 8",
        description: "This is a task description",
        date: new Date().toLocaleDateString(),
        status: Status.Cancelled,
        priority: Priority.Urgent,
        Opacity: 0.5,
    }
]
