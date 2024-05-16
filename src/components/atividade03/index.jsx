import Galeria from "./Gallery";
// import { Profile } from "./Gallery";
import TodoList from "./TodoList";
// import Avatar from "./Avatar";
import { Link } from 'react-router-dom';
import Profile2 from "./Profile2";
import PackingList from "./PackingList";
import App from "./App"
import TeaSet from "./TeaSet";

export default function Atividade03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Galeria />
            {/* <Profile /> */}
            <TodoList />
            {/* <Avatar /> */}
            <Profile2 />
            <PackingList />
            <App />
            <TeaSet />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}