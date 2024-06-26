import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from './components/atividade01/Atividade01';
import Atividade02 from './components/atividade02/Atividade02';
import Atividade03 from './components/atividade03/';
import Atividade04 from './components/atividade04/';
import Atividade05 from './components/atividade05/';
import Atividade06 from "./components/atividade06/";

export default function MinhasRotas() {
    return (
        <>
            <BR>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/atividade01" element={<Atividade01 />} />
                    <Route path="/atividade02" element={<Atividade02 />} />
                    <Route path="/atividade03" element={<Atividade03 />} />
                    <Route path="/atividade04" element={<Atividade04 />} />
                    <Route path="/atividade05" element={<Atividade05 />} />
                    <Route path="/atividade06" element={<Atividade06 />} />
                </Routes>
            </BR>
        </>
    )
}