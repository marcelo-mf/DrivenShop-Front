import { Cart, ArrowBackOutline } from 'react-ionicons'
import { ContainerDescricao, HeaderProduto, Container, ProductPageButton } from '../../components'
import banner from "../../assets/bannerhome.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ProductPage() {

    const [product, setProduct] = useState(null);    
    const { order, setOrder } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => setProduct(resposta.data))
    }, []); 

    function addToCart(product) {
        setOrder([...order, product])
    }

    return( 

        <Container>
            <HeaderProduto>
                <ArrowBackOutline color='#000000' height='31px' width='31px' cssClasses='arrow-back' onClick={() => navigate('/')}/>
                <div className="carrinho">
                    <Cart color='#626060' height='20px' width='20px' cssClasses='ion-icon' onClick={() => navigate('/')}/>
                 </div>
            </HeaderProduto>
            <img src={banner}/>y
            <ContainerDescricao>
                <h1>Módulo 2 - Front-end com interfaces dinâmicas</h1>
                <h2>R$ 299,90</h2>
                <h3>Descrição</h3>
                <p>fjdsnalkdfnslçdkfn slkdfnsldknf  lskdfnçslikdfnpsçildkn sldkfnspdlkfnspdlkfnçsl sdflinksdlfknslifdknsla skj,fbskjdbfiskdbf skjbdfjk</p>
            </ContainerDescricao>
            <ProductPageButton onClick={() => addToCart(product)} disabled={isAdded}>{isAdded ? 'Adicionado' : 'Adcionar ao carrinho'}</ProductPageButton>
        </Container>

        
       

    )
}