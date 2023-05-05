import styled from 'styled-components';

interface NavpanelWrapperProps {
    active: boolean;
}

export const NavpanelWrapper = styled.div<NavpanelWrapperProps>`
    height: 80px;
    background-color: ${props => props.active? 'deepskyblue':'blue'};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-bottom: solid;
    :hover {
        cursor: ${props => props.active? 'default':'pointer'};
    }
`

export const NavpanelTitle = styled.p`
    font-size: 24px;
    color: white;
`