import axios from "axios";
import { Course } from "../types";

export const getCourses = async () => await axios.get('http://localhost:8000/course/');

export const postCourse = async (course: Course) => await axios.post('http://localhost:8000/course/', course);