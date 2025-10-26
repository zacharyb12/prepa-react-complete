import { useState } from 'react';

function Calculatrice() {
    const [calculatriceInfo, setCalculatriceInfo] = useState({
        result: 0,
        nb1: 0,
        operateur: "",
        nb2: 0,
    });

    function addition(){
        setCalculatriceInfo({
            ...calculatriceInfo,
            result: calculatriceInfo.nb1 + calculatriceInfo.nb2,
        });
    }

    function soustraction(){
        setCalculatriceInfo({
            ...calculatriceInfo,
            result: calculatriceInfo.nb1 - calculatriceInfo.nb2,
        });
    }
    function multiplication(){
        setCalculatriceInfo({
            ...calculatriceInfo,
            result: calculatriceInfo.nb1 * calculatriceInfo.nb2,
        });
    }

    function division(){
        setCalculatriceInfo({
            ...calculatriceInfo,
            result: calculatriceInfo.nb1 / calculatriceInfo.nb2,
        });
    }

    function getResult(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        switch (calculatriceInfo.operateur) {
            case "+":
                addition();
                break;
            case "-":
                soustraction();
                break;
            case "*":
                multiplication();
                break;
            case "/":
                division();
                break;
            default:
                break;
        }
    }

    return (
        <>
        <h1 className="text-center mt-5">Calculatrice</h1>

        <div>
            <form onSubmit={getResult} >
            
            <input type="number" value={calculatriceInfo.nb1} onChange={(e) => setCalculatriceInfo({ ...calculatriceInfo, nb1: Number(e.target.value) })} />

            <select value={calculatriceInfo.operateur} onChange={(e) => setCalculatriceInfo({ ...calculatriceInfo, operateur: e.target.value })}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            
            <input type="number" value={calculatriceInfo.nb2} onChange={(e) => setCalculatriceInfo({ ...calculatriceInfo, nb2: Number(e.target.value) })} />
            
            <button type="submit">=</button>
            
            <input type="text" value={calculatriceInfo.result} readOnly/>
            
            </form>
        </div>
        </>
    )
}

export default Calculatrice;