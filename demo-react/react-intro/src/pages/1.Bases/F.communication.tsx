import { useState } from "react";

function Communication() {
    return (
        <>
            <div>
                <h1>Communication entre composants</h1>

                <div className="bg-primary card p-1 w-75 m-auto mt-3">
                    <div className="bg-white p-1 m-1 rounded">
                        <p>L'on pourra envoyer ou recevoir des informations entre les composants.</p>
                        <p>Pour envoyer des informations du parent vers l'enfant, on peut utiliser les props.</p>
                        <p>Pour envoyer des informations de l'enfant vers le parent, on peut utiliser des fonctions de rappel (callbacks) passées en props.</p>
                    </div>
                </div>


                <div className="bg-primary m-auto mt-3 w-75 card p-1">
                    <div className="bg-white p-1 m-1 rounded">
                        <ComposantParent />
                    </div>

                </div>


                <div className="bg-secondary m-auto mt-3 w-75 card p-1">
                    <h2 className="text-center">Composant Parent</h2>
                    <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
                    <pre className="card bg-white mt-1 text-left">
                        {`function ComposantParent(){

    const [valeur, setValeur] = useState("");
    
    function changeValeur(newValue: string) {
        setValeur(newValue);
    }

    return (
        <>
            <input type="text" onChange={(e) => changeValeur(e.target.value)} />
            <p>Valeur dans le parent : {valeur}</p>

            <ComposantEnfant valeur={valeur} receptionValeur={changeValeur} />

        </>
    )
}`}
                    </pre>

                </div>

                <div className="bg-secondary m-auto mt-3 w-75 card p-1">
                    <h2 className="text-center">Composant Enfant</h2>
                    <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
                    <pre className="card bg-white mt-1 text-left">
                        {`function ComposantEnfant({ valeur, receptionValeur }: { valeur: string, receptionValeur: (newValue: string) => void }) {
    return (
        <>

            <p>Valeur dans l'enfant : {valeur}</p>
            <input type="text" onChange={(e) => receptionValeur(e.target.value)} />
            
        </>
    )
}`}
                    </pre>

                </div>

            </div>


            <div className="bg-primary m-auto mt-3 w-75 card p-1">
                <div className="bg-white p-1 m-1 rounded">
                    <ComposantParentFreres />
                </div>

            </div>

            <div className="bg-secondary m-auto mt-3 w-75 card p-1">
                <h2 className="text-center">Composant Parent</h2>
                <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
                <pre className="card bg-white mt-1 text-left">
                    {`function ComposantParentFreres() {
    const [message, setMessage] = useState("");
    return (
        <>
            <ComposantFrere1 message={message} setMessage={setMessage} />
            <ComposantFrere2 message={message} setMessage={setMessage} />
        </>
    )
}`}
                </pre>
            </div>

            <div className="bg-secondary m-auto mt-3 w-75 card p-1">
                <h2 className="text-center">Composant Frere 1</h2>
                <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
                <pre className="card bg-white mt-1 text-left">
                    {`function ComposantFrere1(props: { message: string, setMessage: (msg: string) => void }) {
    return (
        <>
            <h2>Frère 1</h2>
            <p>Message :{props.message}</p>
            <input type="text" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
        </>
    )
}`}
                </pre>
            </div>

            <div className="bg-secondary m-auto mt-3 mb-3 w-75 card p-1">
                <h2 className="text-center">Composant Frere 2</h2>
                <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
                <pre className="card bg-white mt-1 text-left">
                    {`function ComposantFrere2(props: { message: string, setMessage: (msg: string) => void }) {

    return (
        <>
            <h2>Frère 2</h2>
            <p>Message : {props.message}</p>
            <input type="text" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
        </>
    )
}`}
                </pre>
            </div>

        </>
    );
}


function ComposantParent() {

    const [valeur, setValeur] = useState("");

    function changeValeur(newValue: string) {
        setValeur(newValue);
    }
    return (
        <>
            <div className="card w-75 m-auto text-center">
                <h2>Parent</h2>
                <input type="text" onChange={(e) => changeValeur(e.target.value)} />
                <p>Valeur dans le parent : {valeur}</p>
            </div>

            <ComposantEnfant receptionValeur={changeValeur} valeur={valeur} />
        </>
    )
}

function ComposantEnfant({ valeur, receptionValeur }: { valeur: string, receptionValeur: (newValue: string) => void }) {
    return (
        <>
            <div className="card w-75 m-auto text-center mt-2">
                <h2>Enfant</h2>
                <p>Valeur dans l'enfant : {valeur}</p>
                <input type="text" onChange={(e) => receptionValeur(e.target.value)} />
            </div>
        </>
    )
}

function ComposantParentFreres() {
    const [message, setMessage] = useState("");
    return (
        <>
            <div className="text-center">
                <h2 >Parent</h2>
                <p>Message : {message}</p>
            </div>
            <div className="d-flex justify-content-around">

                <div className="card w-25 text-center">
                    <ComposantFrere1 message={message} setMessage={setMessage} />
                </div>
                <div className="card w-25 text-center">
                    <ComposantFrere2 message={message} setMessage={setMessage} />
                </div>
            </div>
        </>
    )
}

function ComposantFrere1(props: { message: string, setMessage: (msg: string) => void }) {
    return (
        <>
            <h2>Frère 1</h2>
            <p>Message :{props.message}</p>
            <input type="text" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
        </>
    )
}

function ComposantFrere2(props: { message: string, setMessage: (msg: string) => void }) {

    return (
        <>
            <h2>Frère 2</h2>
            <p>Message : {props.message}</p>
            <input type="text" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
        </>
    )
}

export default Communication;