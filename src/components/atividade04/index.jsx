import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import { Link } from 'react-router-dom';

export default function Atividade04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <Toolbar />
            <br />
            <Gallery />
            <br />
            <Counter />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}