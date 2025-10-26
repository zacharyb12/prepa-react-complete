import React, { useState } from "react";

function HooksStateDemo(){

    return (
        <>
        <h1>Hooks : useState</h1>

        <div className="bg-primary card p-1 w-75 m-auto mt-3">
        <div className="bg-white p-1 m-1 rounded">
        <p>Le Hook useState vous permet d'ajouter l'état local à vos composants fonctionnels.</p>
        <p>Ce qui veut dire que l'on peut modifier le dom apres qu'il ait été rendu.</p>
        <p>useState renvoie un tableau avec deux éléments :</p>
        <ul>
            <li>La valeur actuelle de l'état.</li>
            <li>Une fonction pour mettre à jour cet état.</li>
        </ul>
        <p>Il faudra donc utiliser cette variable pour afficher ou modifier l'état, et la fonction qui permet de modifier cette.</p>
        </div>
    </div>

    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <h2 className="text-center">useState</h2>
        <div className="bg-white p-1 m-1 rounded">
        <p> Ici on voit 'state' qui est la variable , et setState qui est la fonction.</p>
        <p>la fonction setState est appelé lors d'un evenement pour mettre à jour l'état.</p>
        </div>
        <pre className="card bg-white mt-1 text-left">
            {`function HooksStateDemoCode(){

    const [state, setState] = useState<number>(0);

return (
    <>
    <p>{state}</p>

    <button onClick={() => setState(state - 1)}>Decrementer</button>
    <button onClick={() => setState(state + 1)}>Incrementer</button>
    </>
)
}
            `}
        </pre>
    <div className="bg-white m-auto mt-3 w-75 card p-1">
        <HooksStateDemoCode />
    </div>
    </div>
        </>
    )
}

function HooksStateDemoCode(){

    const [state, setState] = useState<number>(0);

return (
    <>
    <p>{state}</p>

    <button onClick={() => setState(state * 2)}>Double</button>
    <button onClick={() => setState(state * 3)}>Triple</button>
    </>
)
}

export default HooksStateDemo;