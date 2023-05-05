import dayjs from 'dayjs';
import { PageContext } from '../../../contexts';
import { useAppContext } from '../../../utils';
import * as Styled from './studentsGrid.styles';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import { Student } from '../../../types';

const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 240,
      editable: true,
    },
    {
      field: 'familyName',
      headerName: 'Family name',
      width: 240,
      editable: true,
    },
    {
      field: 'dateOfBirth',
      headerName: 'Date of birth',
      width: 100,
      editable: true,
    },
]

export const StudentsGrid = () => {
  const { students } = useAppContext(PageContext);

    return(
        <Styled.GridWrapper>
            <DataGrid
                rows={students.map((student: Student) => {
                  return {...student, dateOfBirth: dayjs(student.dateOfBirth).format('MM/DD/YYYY')};
                })}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Styled.GridWrapper>
    )
}