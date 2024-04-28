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