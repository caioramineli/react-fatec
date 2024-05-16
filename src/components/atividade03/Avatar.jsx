import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {

    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )

    // const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    // const descricao = 'Gregorio Y. Zara'

    // return (
    //     <>
    //         <img
    //             className="avatar"
    //             src={avatar} 
    //             alt={descricao}
    //         /> 
    //     </>
    // )
}