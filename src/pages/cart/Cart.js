import { useEffect, useState } from "react";
import { Container } from "../../components";
import Product from "./Product";
import { Container2, Header, StyledLink2, Subtotal } from "./style";


export default function Cart() {
    const x = [{name: 'Módulo 2 - Front-end com interfaces dinâmicas', price: '299,90', image: 'https://commons.wikimedia.org/wiki/File:Gull_portrait_ca_usa.jpg' , description:'skfnlsnfslnf'}]
    const [order, setOrder] = useState(x)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let sum = 0
        for(let i = 0; i < order.length; i++) {
            let arr = []
            for (let o = 0; o < order[i].price.length; o++) {
                if (order[i].price[o] === ',') {
                  arr.push('.')
                } else {
                  arr.push(order[i].price[o])
                }
            }
            let number = arr.join('')
            sum += parseFloat(number)
        }

        setTotal(sum)
    }, [])

    return(
        <Container>
            <Header>
                Meu carrinho
                <p>{order.length} itens</p>
            </Header>
            <Container2>
                {order.length === 0
                ? <Container><p>Seu carrinho está vazio</p></Container>
                : order.map(product => <Product key={product.name} name={product.name} image={product.image} price={product.price} order={order} setOrder={setOrder} setTotal={setTotal}/>)}
            </Container2>
            <Subtotal>
                <p>TOTAL</p>
                <p>R$ {total}</p>
            </Subtotal>
            <StyledLink2 to='/'>IR PARA PAGAMENTO</StyledLink2>
        </Container>
    )
}