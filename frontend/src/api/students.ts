import axios from "axios";
import { Student } from "../types";

export const getStudents = async () => await axios.get('http://localhost:8000/student/');

export const postStudent = async (student: Student) => await axios.post('http://localhost:8000/student/', student);