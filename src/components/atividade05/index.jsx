import "./style.css"
import Regex from "./Regex";
// import Teste from "./teste"
import { Link } from 'react-router-dom';


export default function Atividade05() {
    return (
        <>
            <h1>Atividade 05</h1>
            <Regex />
            {/* <Teste /> */}
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}