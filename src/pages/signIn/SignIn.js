import { useState } from "react"
import { useNavigate } from "react-router-dom"
import banner from "../../assets/banner.png"
import { Button, Container, Form, Input, StyledLink } from "../../components"

export default function Signin() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [formData, setFormData] = useState({email: '', password: ''})
    const navigate = useNavigate()

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        //setIsDisabled(true)
        navigate('/')
    }

    return (
        <Container>
            <img src={banner}/>
            <Form onSubmit={handleSubmit}>
                <Input type='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} disabled={isDisabled} required/>
                <Input type='password' placeholder='senha' name='password' value={formData.password} onChange={handleChange} disabled={isDisabled} required/>
                <Button type="submit" disabled={isDisabled}>ENTRAR</Button>
            </Form>
            <StyledLink to='/signup'>Não possui cadastro? Clique aqui!</StyledLink>
        </Container>
    )
}