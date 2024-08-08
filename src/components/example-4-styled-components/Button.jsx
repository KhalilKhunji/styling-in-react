import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    background-color: #86ba8a;
    border-radius: 8px;
    color: #3d3d3d;
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;

    ${props =>
        props.$primary &&
        css`
        background-color: #BF4F74;
        color: white;
    `};
`;

const Button = ({ buttonText, $primary }) => {
    return <StyledButton $primary={$primary}>{buttonText}</StyledButton>;
};

export default Button;