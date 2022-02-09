import { useState } from "react"
import { useNavigate } from "react-router-dom"
import banner from "../../assets/banner.png"
import { Button, Container, Form, Input, StyledLink } from "../../components"

export default function Signin() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({email: '', password: ''})
    const navigate = useNavigate()

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        //setIsLoading(true)
        navigate('/')
    }

    return (
        <Container>
            <img src={banner}/>
            <Form onSubmit={handleSubmit}>
                <Input type='email' placeholder='email' name='email'onChange={handleChange} disabled={isLoading} required/>
                <Input type='password' placeholder='senha' name='password' onChange={handleChange} disabled={isLoading} required/>
                <Button type="submit">Entrar</Button>
            </Form>
            <StyledLink to='/'>Não possui cadastro? Clique aqui!</StyledLink>
        </Container>
    )
}