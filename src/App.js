import Signin from "./pages/signIn/SignIn"
import Home from "./pages/home/Home";
import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import Signup from "./pages/signUp/Signup";
import Cart from "./pages/cart/Cart";
b0997dd87fb19c3aaae63e9c4dffe50dc37d8c18

export default function App() {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [order, setOrder] = useState([]);

    return(
        <AuthContext.Provider value={{setToken, setName, token, name, order, setOrder}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/produto' element={<ProductPage />}/>
                    <Route path='/login' element={<Signin />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/cart' element={<Cart />}/>b0997dd87fb19c3aaae63e9c4dffe50dc37d8c18
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}