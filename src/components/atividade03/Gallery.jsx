// import ""

export function Profile() {
    return (
        <img
            src="https://jpimg.com.br/uploads/2024/04/5d9d5d83925daffee39dfab59fdf443d0821eece-675x450.jpg"
            alt="Elon Musk"
        />
    )
}

export default function Galeria() {

    return (
        <section>
            <h1>O homem mais rico do mundo!</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}