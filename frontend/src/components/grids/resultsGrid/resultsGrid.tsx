import { PageContext } from '../../../contexts';
import { useAppContext } from '../../../utils';
import * as Styled from './resultsGrid.styles';
import { GridColDef, DataGrid } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
      field: 'courseName',
      headerName: 'Course',
      width: 240,
      editable: true,
    },
    {
      field: 'studentName',
      headerName: 'Student',
      width: 240,
      editable: true,
    },
    {
      field: 'score',
      headerName: 'Score',
      width: 100,
      editable: true,
    },
]

export const ResultsGrid = () => {
    const { results } = useAppContext(PageContext);
    
    return(
        <Styled.GridWrapper>
            <DataGrid
                rows={results}
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