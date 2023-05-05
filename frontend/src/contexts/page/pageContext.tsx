import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Course, pages, Result, Student } from '../../types';
import { getCourses, getResults, getStudents, postCourse, postResult, postStudent } from '../../api';

interface IProviderProps {
    children?: any;
}

type PageContextValues = {
    page: pages;
    setPage: Dispatch<SetStateAction<pages>>;
    isAlertActive: boolean,
    setIsAlertActive: Dispatch<SetStateAction<boolean>>;
    students: Record<string, any>[];
    addStudent: (student: Student) => void;
    courses: Record<string, any>[];
    addCourse: (course: Course) => void;
    results: Record<string, any>[];
    addResult: (result: Result) => void;
};

export const PageContext = createContext<PageContextValues | undefined>(undefined);

export const PageProvider = (props: IProviderProps) => {
    const [page, setPage] = useState<pages>(pages.HOME);
    const [isAlertActive, setIsAlertActive] = useState(false);
    const [students, setStudents] = useState<Record<string, any>[]>([]);
    const [courses, setCourses] = useState<Record<string, any>[]>([]);
    const [results, setResults] = useState<Record<string, any>[]>([]);

    const fetchStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    const addStudent = async (student: Student) => {
        try {
            await postStudent(student);
            await fetchStudents();
        } catch(e) {
            console.log(e);
        }
    }

    const fetchCourses = async () => {
        try {
            const response = await getCourses();
            setCourses(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    const addCourse = async (course: Course) => {
        try {
            await postCourse(course);
            await fetchCourses();
        } catch(e) {
            console.log(e);
        }
    }

    const fetchResults = async () => {
        try {
            const response = await getResults();

            const mappedResults = response.data.map((result: Result) => {
                return {
                    id: result.id,
                    courseName: result.course.courseName,
                    studentName: `${result.student.firstName} ${result.student.familyName}`,
                    score: result.score,
                }
            })

            setResults(mappedResults);
        } catch(e) {
            console.log(e);
        }
    }

    const addResult = async (result: Result) => {
        try {
            await postResult(result);
            await fetchResults();
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchStudents();
        fetchCourses();
        fetchResults();
    }, []);

    return (
        <PageContext.Provider value={{
            page,
            setPage,
            isAlertActive,
            setIsAlertActive,
            students, 
            addStudent,
            courses,
            addCourse,
            results,
            addResult,
        }}>
            {props.children}
        </PageContext.Provider>
    )
}
