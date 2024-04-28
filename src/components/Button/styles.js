import styled from "styled-components";

export const Button = styled.button `
    background: ${ props => props.isNext ? 'rgba(217, 56, 86, 1)' : 'rgba(255, 255, 255, 0.25)'};
    width: 342px;
    height: 68px;
    font-size: 17px;
    color: #ffffff;
    border: none;
    margin-top: ${ props => props.isNext ? '76px' : '10px'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`