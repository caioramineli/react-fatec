import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from './components/atividade01/Atividade01';
import Atividade02 from './components/atividade02/Atividade02';


export default function MinhasRotas() {
    return (<>
        <BR>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/atividade01" element={<Atividade01/>} />
                <Route path="/atividade02" element={<Atividade02/>} />
            </Routes>
        </BR>
    </>)
}