function Relogio() {
    const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Augosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const data = new Date();
    let mes = meses[data.getMonth()];
    let diaSemana = dias[data.getDay()];

    function horarioAtual() {
        if (document.getElementById("horaAtual") != null) {
            document.getElementById("horaAtual").textContent = new Date().toLocaleTimeString();
        }
    }
    
    setInterval(horarioAtual, 1000)

    return (
        <>
            <h1>Meu Relógio </h1>
            <h1> <span id="horaAtual"></span> | {diaSemana}, {data.getDate()} de {mes} de {data.getFullYear()}</h1>
        </>
    );
}

export default Relogio;


