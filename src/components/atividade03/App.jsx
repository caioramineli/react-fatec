import { people } from "./Data";
import { getImageUrl } from "./utils";

// function Recipe({ drinkers }) {

//     return (

//         <ol>
//             <li>Boil {drinkers} cups of water.</li>
//             <li>Add {drinkers} spoons of tea and (0.5 drinkers) spoons </li>
//             <li>Add {0.5 * drinkers} cups of milk to boil and sugar to tea</li>
//         </ol>

//     );

// }

// export default function App() {

//     return (
//         <section>
//             <h1>Spiced Chai Recipe</h1>
//             <h2>For two</h2>
//             <Recipe drinkers={2} />
//             <h2>For a gathering</h2>
//             <Recipe drinkers={4} />
//         </section>
//     );

    export default function List() {
        const chemists = people.filter(person => person.profession === 'chemist')
        const listItems = chemists.map(person =>
            <li>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    Know for {person.accomplishment}
                </p>
            </li>
        )
        return <ul>{listItems}</ul>
    }
