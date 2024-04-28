import styled from 'styled-components'

export const Container = styled.div `
    background: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    min-height: 100vh;
`
export const Image = styled.img `
    margin-top: 30px;
`
export const ContainerItens = styled.div `
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.p `
    letter-spacing: -0.41px;
    color: #EEEEEE;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-left: 20px;
    margin-top: 42px;
`
export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    font-size: 18px;
    color: #ffffff;
    padding-left: 15px;
` 