import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import AuthContext from "../../contexts/AuthContext";
import Product from "./Product";
import { Button3, Container2, HeaderCart, Subtotal } from "./style";


export default function Cart() {
    const { order, setOrder } = useContext(AuthContext)
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
            <Button3 onClick={checkCart}>IR PARA PAGAMENTO</Button3>
        </Container>
    )
}