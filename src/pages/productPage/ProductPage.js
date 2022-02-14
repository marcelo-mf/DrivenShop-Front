import { Cart, ArrowBackOutline } from 'react-ionicons';
import { ContainerDescricao, HeaderProduto, ProductPageButton, ContainerProduct } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios';


export default function ProductPage() {

    const [product, setProduct] = useState([]); 
    const [isAdded, setIsAdded] = useState(false);    
    const { order, setOrder } = useContext(AuthContext);
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/product/${productId}`);
        promise.then(resposta => setProduct(resposta.data))
    }, []); 

    function addToCart(product) {
        setOrder([...order, product])
        setIsAdded(true)
    }

    return( 

        <ContainerProduct>
            <HeaderProduto>
                <ArrowBackOutline color='#000000' height='31px' width='31px' cssClasses='arrow-back' onClick={() => navigate('/home')}/>
                <div className="carrinho">
                    <Cart color='#626060' height='20px' width='20px' cssClasses='ion-icon' onClick={() => navigate('/cart')}/>
                 </div>
            </HeaderProduto>
            <img classname="product-image" src={product.image}/>
            <ContainerDescricao>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>Descrição</h3>
                <p>{product.description}</p>
            </ContainerDescricao>
            <ProductPageButton onClick={() => addToCart(product)} disabled={isAdded}>{isAdded ? 'Adicionado' : 'Adcionar ao carrinho'}</ProductPageButton>
        </ContainerProduct>

    )
}