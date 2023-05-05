import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';

import * as Styled from './resultsForm.styles';
import { useAppContext } from '../../../utils';
import { PageContext } from '../../../contexts';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { Course, Student } from '../../../types';

type ResultsFormProps = {
    handleClose: () => void;
}

export const ResultsForm = ({
    handleClose,
}: ResultsFormProps) => {
    const [ courseId, setCourseId ] = useState('');
    const [ studentId, setStudentId ] = useState('');
    const [ score, setScore ] = useState('');
    const [ isValid, setIsValid ] = useState(false);
    const { setIsAlertActive, students, courses, addResult } = useAppContext(PageContext);

    const handleSubmit = () => {
        console.log(courseId, studentId, score);
        addResult({
            courseId,
            studentId,
            score
        });
        setIsAlertActive(true);
        handleClose();
    };

    const courseItems = courses.map((course: Course) => {
        return (<MenuItem value={course.id}>{course.courseName}</MenuItem>)
    });
    const studentitems = students.map((student: Student) => {
        const fullName = `${student.firstName} ${student.familyName}`;
        return (<MenuItem value={student.id}>{fullName}</MenuItem>)
    });

    useEffect(() => {
        setIsValid(courseId !== '' && studentId !== '' && score !== '');
    }, [courseId, studentId, score]);

    return(
        <Modal
            open={true}
        >
            <Styled.ModalWrapper>
                <Styled.Header>
                    Create a new result
                </Styled.Header>
                <Styled.InputWrapper>
                    <FormControl fullWidth>
                        <InputLabel id="course-name-label">Course name</InputLabel>
                        <Styled.SelectInput 
                            labelId="course-name-label"
                            value={courseId}
                            onChange={(event) => {
                                setCourseId(event.target.value as string);
                            }}
                            variant="standard"
                            required
                        >
                            {courseItems}
                        </Styled.SelectInput>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="student-name-label">Student name</InputLabel>
                        <Styled.SelectInput 
                            labelId="student-name-label"
                            value={studentId}
                            onChange={(event) => {
                                setStudentId(event.target.value as string);
                            }}
                            variant="standard"
                            required
                        >
                            {studentitems}
                        </Styled.SelectInput>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="score-label">Score</InputLabel>
                        <Styled.SelectInput 
                            labelId="score-label"
                            value={score}
                            onChange={(event) => {
                                setScore(event.target.value as string);
                            }}
                            variant="standard"
                            required
                        >
                            <MenuItem value={'A'}>{'A'}</MenuItem>
                            <MenuItem value={'B'}>{'B'}</MenuItem>
                            <MenuItem value={'C'}>{'C'}</MenuItem>
                            <MenuItem value={'D'}>{'D'}</MenuItem>
                            <MenuItem value={'E'}>{'E'}</MenuItem>
                            <MenuItem value={'F'}>{'F'}</MenuItem>
                        </Styled.SelectInput>
                    </FormControl>
                </Styled.InputWrapper>
                <Styled.ButtonWrapper>
                    <Styled.ModalButton
                        variant="contained"
                        onClick={() => handleClose()}
                    >
                        Cancel
                    </Styled.ModalButton>
                    <Styled.ModalButton
                        variant="contained"
                        disabled={!isValid}
                        onClick={() => handleSubmit()}
                    >
                        Confirm
                    </Styled.ModalButton>
                </Styled.ButtonWrapper>
            </Styled.ModalWrapper>
        </Modal>
    )
}