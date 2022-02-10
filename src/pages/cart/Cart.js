import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Container } from "../../components";
import { Container2, Header, StyledLink2, Subtotal } from "./style";


export default function Cart() {
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let sum = 0
        for(let i = 0; i < order.length; i++) {
            sum += order[i].value
        }

        setTotal(sum)
    },[])

    return(
        <Container>
            <Header>
                Meu carrinho
                <p>{order.length} itens</p>
            </Header>
            <Container2>
                {order.length === 0
                ? <Container><p>Seu carrinho está vazio</p></Container>
                : order}
            </Container2>
            <Subtotal>
                <p>TOTAL</p>
                <p>R$ {total}</p>
            </Subtotal>
            <StyledLink2 to='/'>IR PARA PAGAMENTO</StyledLink2>
        </Container>
    )
}