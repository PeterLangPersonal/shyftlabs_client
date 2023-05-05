export type Student = {
    id: number;
    firstName: string;
    familyName: string;
    dateOfBirth: Date;
};

export type Course = {
    id: number;
    courseName: string;
};

export type Result = {
    id: number;
    score: string;
    course: Course;
    student: Student;
};
