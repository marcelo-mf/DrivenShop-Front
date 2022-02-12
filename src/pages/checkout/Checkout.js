import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Input } from "../../components";
import { HeaderCheckout } from "./style";


export default function Checkout() {
    const [formData, setFormData] = useState({card: '', security: '', name: ''})
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()
    const checkNumber = /^[0-9]{16}$/
    const checkSecurity = /^[0-9]{3}$/

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
        //setIsDisabled(true)
        navigate("/")
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