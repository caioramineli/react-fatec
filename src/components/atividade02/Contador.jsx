import './contador.css'
import Reload from '../../assets/reload.png'
import homemIcon from '../../assets/homem.png'
import mulherIcon from '../../assets/mulher.png'
import btnMais from '../../assets/mais.png'
import btnMenos from '../../assets/menos.png'
import { useState } from 'react'

export default function Contador() {

    const [contadorTotal, setContadorTotal] = useState(0);
    const [contadorHomem, setContadorHomem] = useState(0);
    const [contadorMulher, setContadorMulher] = useState(0);

    const somarHomem = () => {
        setContadorHomem(contadorHomem + 1);
        setContadorTotal(contadorTotal + 1);
    };

    const subtrairHomem = () => {
        if (contadorHomem > 0) {
            setContadorHomem(contadorHomem - 1);
            setContadorTotal(contadorTotal - 1); 
        }
    };

    const somarMulher = () => {
        setContadorMulher(contadorMulher + 1);
        setContadorTotal(contadorTotal + 1);
    };

    const subtrairMulher = () => {
        if (contadorMulher > 0) {
            setContadorMulher(contadorMulher - 1);
            setContadorTotal(contadorTotal - 1);
        }
    };

    const zerar = () => {
        setContadorTotal(0);
        setContadorHomem(0);
        setContadorMulher(0);
    };

    return (
        <>
            <div id="container-contador">
                <h1>Total</h1>
                <img onClick={zerar} src={Reload} id='reload' alt="" />
                <span id="contadorTotal">{contadorTotal}</span>

                <div id='containerHomemMulher'>
                    <div id="containerHomem">
                        <img src={homemIcon} alt="" />
                        <div id='container-btns'>
                            <img onClick={somarHomem} id='maisH' src={btnMais} alt="" />
                            <img onClick={subtrairHomem} id='menosH' src={btnMenos} alt="" />
                        </div>
                        <h2>Homem</h2>
                        <span id="contadorHomem">{contadorHomem}</span>
                    </div>

                    <div id="containerMulher">
                        <img src={mulherIcon} alt="" />
                        <div>
                            <img onClick={somarMulher} id='maisM' src={btnMais} alt="" />
                            <img onClick={subtrairMulher} id='menosM' src={btnMenos} alt="" />
                        </div>
                        <h2>Mulher</h2>
                        <span id="contadorMulher">{contadorMulher}</span>
                    </div>
                </div>
            </div>
        </>
    )
}