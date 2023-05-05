import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Select from '@mui/material/Select';

export const ModalWrapper = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    background-color: white;
    border: 2px solid #000;
    boxShadow: 24;
    p: 4;
    padding: 16px 0px;
`

export const Header = styled.div`
    height: 48px;
    font-size: 32px;
    border-bottom: solid;
    font-weight: 600;
    padding-bottom: 16px;
    padding-left: 24px;
`

export const InputWrapper = styled.div`
    padding: 8px 24px 16px 24px;
    & .MuiStack-root {
        overflow: visible;
    }
`

export const SelectInput = styled(Select)`
    width: 100%;
    margin-bottom: 16px;
`

export const DateInput = styled(DatePicker)`
    width: 100%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 24px;
`

export const ModalButton = styled(Button)`
    width: 46%;
`