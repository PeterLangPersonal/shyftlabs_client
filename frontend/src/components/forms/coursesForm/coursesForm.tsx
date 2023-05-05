import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';

import * as Styled from './coursesForm.styles';
import { useAppContext } from '../../../utils';
import { PageContext } from '../../../contexts';

type CoursesFormProps = {
    handleClose: () => void;
}

export const CoursesForm = ({
    handleClose,
}: CoursesFormProps) => {
    const [ courseName, setCourseName ] = useState('');
    const [ isValid, setIsValid ] = useState(false);
    const { setIsAlertActive, addCourse } = useAppContext(PageContext);

    useEffect(() => {
        setIsValid(courseName !== '');
    }, [courseName]);

    const handleSubmit = () => {
        addCourse({
            courseName
        });
        setIsAlertActive(true);
        handleClose();
    };

    return(
        <Modal
            open={true}
        >
            <Styled.ModalWrapper>
                <Styled.Header>
                    Create a new course
                </Styled.Header>
                <Styled.InputWrapper>
                    <Styled.TextInput 
                        label="Course name" 
                        variant="standard"
                        value={courseName}
                        onChange={(event) => {
                            setCourseName(event.target.value);
                        }}
                        required
                    />
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