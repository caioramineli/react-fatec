import React, { useState, useEffect } from 'react';

function Relogio() {
    const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Augosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const data = new Date();
    let mes = meses[data.getMonth()];
    let diaSemana = dias[data.getDay()];
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let complementoM = hora.getMinutes() < 10 ? "0" : "";
    let complementoH = hora.getHours() < 10 ? "0" : "";
    let complementoS = hora.getSeconds() < 10 ? "0" : "";
        
    return (
        <>
            <h1>Meu Relógio </h1>
            <h1>{complementoH}{data.getHours()}:{complementoM}{data.getMinutes()}:{complementoS}{data.getSeconds()} | {diaSemana}, {data.getDate()} de {mes} de {data.getFullYear()}</h1>
        </>
    );
}
export default Relogio;


