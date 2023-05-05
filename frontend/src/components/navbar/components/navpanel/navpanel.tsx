import * as Styled from './navpanel.styles';

type NavpanelProps = {
    name: string;
    active: boolean;
    handleClick: () => void;
};

export const Navpanel = ({
    name,
    active,
    handleClick,
}: NavpanelProps) => {
    return(
        <Styled.NavpanelWrapper active={active} onClick={() => handleClick()}>
            <Styled.NavpanelTitle>
                {name}
            </Styled.NavpanelTitle>
        </Styled.NavpanelWrapper>
    )
}