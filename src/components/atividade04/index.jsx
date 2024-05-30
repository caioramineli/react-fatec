import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import Form from './Form';
import MovingDot from './MovingDot';
import BucketList from './BucketList';
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
            <Form />
            <br />
            <MovingDot />
            <br />
            <BucketList />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}