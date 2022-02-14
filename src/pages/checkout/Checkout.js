import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Input } from "../../components";
import AuthContext from "../../contexts/AuthContext";
import { HeaderCheckout } from "./style";


export default function Checkout() {
    const [formData, setFormData] = useState({card: '', security: '', name: ''})
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()
    const checkNumber = /^[0-9]{16}$/
    const checkSecurity = /^[0-9]{3}$/
    const { order, token } = useContext(AuthContext)
    const config = {headers: {"Authorization": `Bearer ${token}`}};

    function handleData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if (!checkNumber.test(formData.card)) {
            alert('Digite um numero de cartão válido')
            return
        }
        if (!checkSecurity.test(formData.security)) {
            alert('Digite um codigo de segurança valido')
            return
        }
        setIsDisabled(true)
        const promise = axios.post('http://localhost:5000/driven-shop/order', {order}, config)
        promise.then(response => {
            setIsDisabled(false)
            navigate("/home")
        })
        promise.catch(() => {
            setIsDisabled(false)
            return alert('Ocorreu um erro, tente novamente!')
        })
    }

    return (
        <Container>
            <HeaderCheckout>Digite seus dados:</HeaderCheckout>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Numero do cartão" name="card" onChange={handleData} value={formData.card} disabled={isDisabled} required/>
                <Input type="text" placeholder="Codigo de Segurança" name="security" onChange={handleData} value={formData.security} disabled={isDisabled} required/>
                <Input type="text" placeholder="Nome" name="name" onChange={handleData} value={formData.name} disabled={isDisabled} required/>
                <Button type="submit" disabled={isDisabled}>FINALIZAR COMPRA</Button>
            </Form>
        </Container>
    )
}