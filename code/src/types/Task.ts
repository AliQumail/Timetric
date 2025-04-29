export interface Task {
    id: string;
    title: string;
    description: string;
    startTime: Date | null;
    endTime: Date | null;
}