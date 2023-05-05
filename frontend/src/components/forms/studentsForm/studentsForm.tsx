import Modal from '@mui/material/Modal';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';

import * as Styled from './studentsForm.styles';
import dayjs from 'dayjs';
import { useAppContext } from '../../../utils';
import { PageContext } from '../../../contexts';

type StudentsFormProps = {
    handleClose: () => void;
}

export const StudentsForm = ({
    handleClose,
}: StudentsFormProps) => {
    const [ firstName, setFirstName ] = useState('');
    const [ familyName, setFamilyName ] = useState('');
    const [ dateOfBirth, setDateOfbirth ] = useState<string | null>(null);
    const [ isValid, setIsValid ] = useState(false);
    const { setIsAlertActive, addStudent } = useAppContext(PageContext);

    useEffect(() => {
        const age = dayjs().diff(dayjs(dateOfBirth), 'years');
        setIsValid(firstName !== '' && familyName !== '' && dateOfBirth !== null && age >= 10 && dayjs(dateOfBirth).isValid() && dayjs(dateOfBirth).year() >= 1900);
    }, [firstName, familyName, dateOfBirth]);

    const handleSubmit = () => {
        addStudent({
            firstName,
            familyName,
            dateOfBirth,
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
                    Create a new student
                </Styled.Header>
                <Styled.InputWrapper>
                    <Styled.TextInput 
                        label="First name" 
                        variant="standard"
                        value={firstName}
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }}
                        required
                    />
                    <Styled.TextInput
                        label="Family name" 
                        variant="standard"
                        value={familyName}
                        onChange={(event) => {
                            setFamilyName(event.target.value);
                        }}
                        required
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <Styled.DateInput
                                label="Date of Birth"
                                value={dateOfBirth}
                                onChange={(value) => {
                                    setDateOfbirth(dayjs(value as Date).format('MM/DD/YYYY'));
                                }}
                                slotProps={{ textField: { variant: 'standard', required: true} }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
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