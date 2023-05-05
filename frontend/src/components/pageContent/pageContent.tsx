import { pages } from '../../types';
import { useAppContext } from '../../utils';
import { PageContext } from '../../contexts';
import { CoursesForm, StudentsForm, ResultsForm } from '../forms';
import { useState } from 'react';
import { CoursesGrid, ResultsGrid, StudentsGrid } from '../grids';
import * as Styled from './pageContent.styles';
import { AddButton } from '../buttons';

export const PageContent = () => {
    const { page } = useAppContext(PageContext);
    const [ isFormActive, setFormIsActive ] = useState(false);

    return(
        <Styled.PageContentWrapper>
            {(page === pages.STUDENTS && <StudentsGrid/>) || 
                (page === pages.COURSES && <CoursesGrid/>) || 
                (page === pages.RESULTS && <ResultsGrid/>) || 
                <div>HOME PAGE!!!</div>}
            {isFormActive && 
                ((page === pages.STUDENTS && <StudentsForm handleClose={() => setFormIsActive(false)}/>) ||
                (page === pages.COURSES && <CoursesForm handleClose={() => setFormIsActive(false)}/>) ||
                (page === pages.RESULTS && <ResultsForm handleClose={() => setFormIsActive(false)}/>))}
            {page !== pages.HOME && <AddButton handleClick={() => setFormIsActive(true)}/>}
        </Styled.PageContentWrapper>
    )
}