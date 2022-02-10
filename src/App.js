import Signin from "./pages/signIn/SignIn"
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Signin />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}