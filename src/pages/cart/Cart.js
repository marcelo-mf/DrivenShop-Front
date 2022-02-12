import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import Product from "./Product";
import { Container2, HeaderCart, StyledLink2, Subtotal } from "./style";


export default function Cart() {
    const x = [{name: 'Módulo 2 - Front-end com interfaces dinâmica', price: '299,90', image: 'https://i.imgur.com/G3SMzTe.png' , description:'skfnlsnfslnf'},{name: 'Módulo 2 - Front-end com interfaces dinâmicas', price: '299,90', image: 'https://i.imgur.com/G3SMzTe.png' , description:'skfnlsnfslnf'}]
    const [order, setOrder] = useState(x)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()


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

    function checkCart() {
        if (order.length === 0) {
            alert('Seu carrinho está vazio')
            return
        } else {
            navigate('/checkout')
        }
    }

    return(
        <Container>
            <HeaderCart>
                Meu carrinho
                <p>{order.length} itens</p>
            </HeaderCart>
            <Container2>
                {order.length === 0
                ? <Container><p>Seu carrinho está vazio</p></Container>
                : order.map(product => <Product key={product.name} name={product.name} image={product.image} price={product.price} order={order} setOrder={setOrder} setTotal={setTotal}/>)}
            </Container2>
            <Subtotal>
                <p>TOTAL</p>
                <p>R$ {total}</p>
            </Subtotal>
            <StyledLink2 to={checkCart}>IR PARA PAGAMENTO</StyledLink2>
        </Container>
    )
}