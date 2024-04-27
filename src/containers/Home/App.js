import React, { useState, useRef, useEffect } from "react";

import axios from 'axios'

import Burger from '../../assets/burger.png'
import Trash from '../../assets/trash.png'

import {
    Container,
    Image,
    InputLabel,
    Input,
    ContainerItens,
    H1,
    Button,
    Comands,
    Ul,
    Comand
} from "./styles"

const App = () => {

    // const orders = []
    const [ orders, setOrders ] = useState([])
    const inputOrder = useRef()
    const inputName = useRef()

    async function addNewOrder(){

        const { data: newOrder } = await axios.post("http://localhost:3001/pedidos", {
            order: inputOrder.current.value,
            name: inputName.current.value
        })

        setOrders([...orders, newOrder])
    }

    useEffect(() => {
        async function fethOrders(){
            const {data: newOrders} = await axios.get("http://localhost:3001/pedidos")
        
            setOrders(newOrders)
        }
        
        fethOrders()
    }, [])

    async function deleteOrder(orderId){
        await axios.delete(`http://localhost:3001/pedidos/${orderId}`)

        const newOrders = orders.filter(order => order.id !== orderId)

        setOrders(newOrders)
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

                <Button onClick={addNewOrder}>Novo Pedido</Button>

                <Ul>
                    {orders.map( order => (
                        <Comands key={order.id}>
                            <Comand>
                                <p class="order">{order.order}</p>
                                <p class="name">{order.name}</p>
                            </Comand>
                            <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt="lata-de-lixo"/></button>
                        </Comands>
                        ))}
                </Ul>
            </ContainerItens>
        </Container>
    )
    
}

export default App