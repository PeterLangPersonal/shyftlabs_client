import * as Styled from './addButton.styles';

type AddButtonProps = {
    handleClick: () => void;
}

export const AddButton = ({
    handleClick,
}: AddButtonProps) => {
    return(
        <Styled.AddButton onClick={() => handleClick()}/>
    )
}