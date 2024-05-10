import Galeria from "./Gallery";
import { Profile } from "./Gallery";
import { Link } from 'react-router-dom';

export default function Atividade03() {
    return (
        <>
            <h1>Atividade 03</h1>
            {/* <Galeria /> */}
            <Profile />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}