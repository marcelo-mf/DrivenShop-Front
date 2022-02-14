import Signin from "./pages/signIn/SignIn"
import Home from "./pages/home/Home";
import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import Signup from "./pages/signUp/Signup";
import Cart from "./pages/cart/Cart";
import {useState} from 'react';
import Checkout from "./pages/checkout/Checkout";

export default function App() {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [order, setOrder] = useState([]);

    return(
        <AuthContext.Provider value={{setToken, setName, token, name, order, setOrder}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/produto/:productId' element={<ProductPage />}/>
                    <Route path='/' element={<Signin />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/checkout' element={<Checkout />}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}