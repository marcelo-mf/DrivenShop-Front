import Signin from "./pages/signIn/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Signin />}/>
            </Routes>
        </BrowserRouter>
    )
}