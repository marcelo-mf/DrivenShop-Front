import { Button, Container, Form, Input, StyledLink } from "../../components";
import logo from "../../assets/logo.png"
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Signup() {
    const [formData, setFormData] = useState({name: '', email: '', password: '', cpf: ''})
    const [passwordConfirmation, setPasswordConfirmation] = useState({password: ''})
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()

    function handleData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleConfirmation(e){
        setPasswordConfirmation({password: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        //setIsDisabled(true)
        navigate("/")
    }
    
    return (
        <Container>
            <Img src={logo}/>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nome" name="name" onChange={handleData} value={formData.name} disabled={isDisabled} required/>
                <Input type="email" placeholder="E-mail" name="email" onChange={handleData} value={formData.email} disabled={isDisabled} required/>
                <Input type="text" placeholder="CPF" name="cpf" onChange={handleData} value={formData.cpf} disabled={isDisabled} required/>
                <Input type="password" placeholder="Senha" name="password" onChange={handleData} value={formData.password} disabled={isDisabled} required/>
                <Input type="password" placeholder="Confirme a senha" name="password confirmation" onChange={handleConfirmation} value={passwordConfirmation.password} disabled={isDisabled} required/>
                <Button type="submit" disabled={isDisabled}>CADASTRAR</Button>
            </Form>
            <StyledLink to='/'>Já possui cadastro? Clique aqui!</StyledLink>
        </Container>
    )
}

const Img = styled.img`
    margin-top: 103px;
    margin-bottom: 11px;
`