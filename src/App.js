import Signin from "./pages/signIn/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signUp/Signup";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Signin />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/checkout' element={<Checkout />}/>
            </Routes>
        </BrowserRouter>
    )
}