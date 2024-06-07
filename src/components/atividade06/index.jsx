import Carrinho from "./Carrinho"
import { Link } from 'react-router-dom';


export default function Atividade06() {
    return (
        <>
            <h1>Atividade 06</h1>
            <Carrinho />
            {/* <Teste /> */}
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}