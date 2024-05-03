import React, { useState, useEffect } from 'react';

const Letreiro = () => {
    const [text, setText] = useState('');
    const palavra = 'Conheça a Fatec';

    useEffect(() => {
        let index = 0;

        const digitacaoIntervalo = setInterval(() => {
            setText(prevText => {
                if (index === palavra.length) {
                    index = 0;
                    return '';
                } else {
                    index++;
                    return palavra.slice(0, index);
                }
            });
        }, 200);

        return () => clearInterval(digitacaoIntervalo);
    }, []);

    return (
        <>
            <h1>Meu Letreiro</h1>           
            <h1>{text}</h1>
        </>
    )
};

export default Letreiro;