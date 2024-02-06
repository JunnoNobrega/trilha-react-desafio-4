import styled, { css } from 'styled-components';

const disabledStyles = css`
    background-color: #555;
    border-color: #555;
    cursor: not-allowed;
`;

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    cursor:pointer;
    
    &:hover {
        opacity: 0.6;
    
    }
    ${({ disabled }) => disabled && disabledStyles}

`