import Buttons from "./Buttons"
// import { useState } from "react";

export default function Regex() {

    return (
        <div id="container-regex">

            <h2>Dinâmica - REGEX</h2>
            <h2>Mult Functional Counters</h2>

            <Buttons />
            
            <h2>Character Counter</h2>
            <input type="text" placeholder="Digite algo..." />

            <div id="container-contadores">
                <span>Text Length: { }</span>
                <span>Alphabets: { }</span>
                <span>Numbers: { }</span>
                <span>Symbols: { }</span>
                <span>Spaces: { }</span>
            </div>
        </div>
    )
}