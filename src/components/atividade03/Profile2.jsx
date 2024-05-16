import Avatar from './Avatar'
import './style.css'

function Card({ children }) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default function Profile2() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            {/* Meu texto */}
        </Card>


        // <>
            // <div className='card'>
            //     <Avatar {...props}/>
            // </div>
            /* <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />

            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />

            <Avatar
                size={50}
                person={{
                    name: 'Lin lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </> */
    )
}