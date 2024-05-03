import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Home from "./home";

export default function MinhasRotas() {
    return (<>
        <BR>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BR>
    </>)
}