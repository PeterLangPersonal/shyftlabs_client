import { PageContext } from '../../../contexts';
import { useAppContext } from '../../../utils';
import * as Styled from './coursesGrid.styles';
import { GridColDef, DataGrid } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
      field: 'courseName',
      headerName: 'Course name',
      width: 240,
      editable: true,
    },
]

export const CoursesGrid = () => {
    const { courses } = useAppContext(PageContext);

    return(
        <Styled.GridWrapper>
            <DataGrid
                rows={courses}
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