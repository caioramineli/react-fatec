const today = new Date()

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date)
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function TodoList() {
    const nome = 'Hedy Lamarr'

    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
            </div>

            <h1>To do List for {formatDate(today)}</h1>
            <h1>{nome}'s To Do List</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg" alt="Hedy Lamarr" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Imporve the spectrum</li>
            </ul>
        </>
    )
}