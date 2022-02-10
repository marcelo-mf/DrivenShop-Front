import Signin from "./pages/signIn/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signUp/Signup";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Signin />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
        </BrowserRouter>
    )
}