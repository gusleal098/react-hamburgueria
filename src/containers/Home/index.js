import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Burger from '../../assets/burger.png'

import Button from '../../components/Button'
import H1 from '../../components/Title'

import {
    Container,
    Image,
    InputLabel,
    Input,
    ContainerItens
} from "./styles"

const App = () => {

    // const orders = []
    const [ orders, setOrders ] = useState([])
    const history = useHistory()
    const inputOrder = useRef()
    const inputName = useRef()

    async function addNewOrder(){

        const { data: newOrder } = await axios.post("http://localhost:3001/pedidos", {
            order: inputOrder.current.value,
            name: inputName.current.value
        })

        setOrders([...orders, newOrder])

        history.push('/pedidos')
    }

    function goNextPage(){
        history.push('/pedidos')
    }



    return (
        <Container>
            <Image alt='logo-burger' src={Burger} />
            <H1>Faça seu pedido</H1>
            <ContainerItens>
                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrder} placeholder='Pedido' />
                
                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder='Nome do Cliente' />

                <Button isNext={true} onClick={addNewOrder}>Novo Pedido</Button>
                <Button onClick={goNextPage}>Pedidos Completados</Button>

            </ContainerItens>
        </Container>
    )
    
}

export default App