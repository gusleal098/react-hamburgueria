import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Saco from '../../assets/saco.png'
import Trash from '../../assets/trash.png'

import Button from '../../components/Button'
import H1 from '../../components/Title'

import {
    Container,
    Image,
    ContainerItens,
    Comands,
    Ul,
    Comand
} from "./styles"

const App = () => {

    // const orders = []
    const [ orders, setOrders ] = useState([])
    const history = useHistory()

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

    function goBackPage(){
        history.push('/')
    }

    return ( 
        <Container>
            <Image alt='saco-burger' src={Saco} />
            <H1>Pedidos</H1>
            <ContainerItens>
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
                <Button isNext={true} onClick={goBackPage}>Voltar</Button>
            </ContainerItens>
        </Container>
    )
    
}

export default App