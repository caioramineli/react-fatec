import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import Form from './Form';
import MovingDot from './MovingDot';
import Form2 from './Form2';
import Form3 from './Form3';
import List from './List'
import List2 from './List2'
import ShapeEditor from './ShapeEditor'
import CounterList from './CounterList'
import List3 from './List3'
import List4 from './List4'
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
            <Form2 />
            <br />
            <Form3 />
            <br />
            <br />
            <List />
            <br />
            <List2 />
            <br />
            <ShapeEditor />
            <br />
            <CounterList />
            <br />
            <List3 />
            <br />
            <List4 />
            <br />
            <BucketList />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}