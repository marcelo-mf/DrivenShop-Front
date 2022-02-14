import { useState } from "react"
import { useNavigate } from "react-router-dom"
import banner from "../../assets/banner.png"
import { Button, Container, Form, Input, StyledLink } from "../../components"
import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import axios from "axios"

export default function Signin() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [formData, setFormData] = useState({email: '', password: ''})
    const { setToken, setName } = useContext(AuthContext);
    const navigate = useNavigate()

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsDisabled(true)
        const promise = axios.post('https://driven-shop.herokuapp.com/driven-shop/sign-in', formData)
        promise.then(response => {
            setName(response.data.name);
            setToken(response.data.token);
            setIsDisabled(false)
            navigate('/home');
        })
        promise.catch(() => {
            setIsDisabled(false)
            return alert('Aconteceu um erro, tente novamente!')
        })
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