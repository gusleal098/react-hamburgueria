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
export const H1 = styled.h1 `
    font-size: 28px;
    color: #ffffff;
    font-weight: 700;
    margin-top: 25px;
`
export const Button = styled.button `
    background: rgba(217, 56, 86, 1);
    width: 342px;
    height: 68px;
    font-size: 17px;
    color: #ffffff;
    border: none;
    margin-top: 76px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
export const Ul = styled.ul `
    display: flex;
    flex-direction: column;
`
export const Comands = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    gap: 88px;
    margin-top: 20px;

    width: 342px;
    height: 101px;

    border-radius: 14px;

    p.order {
        color: rgba(255, 255, 255, 1);
        margin-bottom: 29px;
    }

    p.name {
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 700;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const Comand = styled.div `
    flex-wrap: wrap;
`