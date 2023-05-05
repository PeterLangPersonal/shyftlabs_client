import axios from "axios";
import { Result } from "../types";

export const getResults = async () => await axios.get('http://localhost:8000/result/');

export const postResult = async (result: Result) => await axios.post('http://localhost:8000/result/', result);