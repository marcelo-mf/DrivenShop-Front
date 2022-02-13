import { useNavigate } from "react-router-dom"
import banner from "../../assets/bannerhome.png"
import logo from "../../assets/logo.png"
import { Cart } from 'react-ionicons'
import { Header, Container, ContainerCursos, Curso, CursoButton } from "../../components";
import { useEffect, useState } from "react";

export default function Home() {

    const [categorySelected, setCategorySelected] = useState('back');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        const promise = axios.get('https://drivenshop.herokuapp.com/list', config);

        promise.then(response => {

            setProducts(response.data);
        })
        promise.catch(console.log('erro'));
    }, []);
    

    const navigate = useNavigate();

    function selectCategory(category) {

        if(category === categorySelected) {
            return
        }

        setCategorySelected(category);
    }

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
                    <div className={(categorySelected === 'back') ? 'selected' : undefined} onClick={() => selectCategory('back')}>
                        <h2>Back End</h2>
                    </div>
                    <div className={(categorySelected === 'front') ? 'selected' : undefined} onClick={() => selectCategory('front')}>
                        <h2>Front End</h2>
                    </div>
                    <div className={(categorySelected === 'soft') ? 'selected' : undefined} onClick={() => selectCategory('soft')}>
                        <h2>Soft Skills</h2>
                    </div>
                </div>
            </ContainerCursos>
            <div>
                {products.map(product => (
                    <Curso onClick={() => navigate('/produto')}>
                    <img src={product.image}/>
                    <div className="curso-rigth">
                        <div className="text-curso">
                            <h1>{product.name}</h1>
                            <div className="preco-tempo">
                                <h2>{product.price}</h2>
                                <ionicon/>
                                <p>{product.time}</p>
                            </div>
                        </div>
                        <CursoButton>Adicionar ao Carrinho</CursoButton>
                    </div>
                </Curso>
                ))}
                
            </div>
        </Container>
    )
}