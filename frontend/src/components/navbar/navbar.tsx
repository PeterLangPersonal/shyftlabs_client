import { pages } from '../../types';
import { Navpanel } from './components';
import * as Styled from './navbar.styles';
import { useAppContext } from '../../utils';
import { PageContext } from '../../contexts';

export const Navbar = () => {
    const { page, setPage } = useAppContext(PageContext);

    const handleClick = (page: pages) => {
        setPage(page);
    }

    return(
        <Styled.NavbarWrapper>
            <Navpanel name="Home" active={page === pages.HOME} handleClick={() => handleClick(pages.HOME)}/>
            <Navpanel name="Students" active={page === pages.STUDENTS} handleClick={() => handleClick(pages.STUDENTS)}/>
            <Navpanel name="Courses" active={page === pages.COURSES} handleClick={() => handleClick(pages.COURSES)}/>
            <Navpanel name="Results" active={page === pages.RESULTS} handleClick={() => handleClick(pages.RESULTS)}/>
        </Styled.NavbarWrapper>
    )
}