import { useNavigate } from "react-router-dom"
import banner from "../../assets/bannerhome.png"
import logo from "../../assets/logo.png"
import { Cart } from 'react-ionicons'
import { Header, Container, ContainerCursos } from "../../components";

export default function Home() {

    const navigate = useNavigate();

    return(
        <Container>
            <Header>
                <img src={logo}/>
                <div className="rigth-container">
                    <div className="sign-in" onClick={() => navigate('/Login')}>
                        <p>Sign In</p>
                    </div>
                    <div className="carrinho">
                        <Cart color='#626060' height='20px' width='20px' cssClasses='ion-icon'/>
                    </div>
                </div>
            </Header>
            <img src={banner}/>
            <ContainerCursos>
                <h1>Cursos Disponíveis</h1>
                <div className="categorias">
                    <div>
                        <h2>Back End</h2>
                    </div>
                    <div>
                        <h2>Front End</h2>
                    </div>
                    <div>
                        <h2>Soft Skills</h2>
                    </div>
                </div>
            </ContainerCursos>
        </Container>
    )
}