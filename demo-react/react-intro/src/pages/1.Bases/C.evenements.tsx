function DemoEvenements() {
return(
    <>
    <h1 className="text-center mt-5">Evenements</h1>

    <div className="bg-primary card p-1 w-75 m-auto mt-3">
        <div className="bg-white p-1 m-1 rounded">
            <p>Les evenements consiste a effectuer une action lors d'un evenements utilisateurs (click , hover ,etc)</p>
            <p>Avec React les evenements sont appelés de manière en lowerCamelCase(Exemple : onClick, onMouseHover, etc.)</p>
            <p>on pourra fournir une action a effectuer ou une methode</p>
        </div>
    </div>

    <div className="bg-secondary m-auto mt-3 w-75 card p-2">
        <h2 className="text-center">Evenements exemple</h2>
        <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un bouton qui affiche une alerte lors du click</p>
        <pre className="card bg-white mt-1 w-50 text-left p-1">
            {`function MonComposant() {
                function handleClick() {
                    alert('Bouton cliqué!');
                }
                
                return (
                    <button onClick={handleClick}>
                        Cliquez-moi
                    </button> 
                );
            }`}
                </pre>

                                <div className="w-25 text-center m-auto mt-1 mb-1">
        <MonComposantClick />
                </div>
    </div>


    <div className="bg-primary card p-1 w-75 m-auto mt-3">
        <div className="bg-white p-1 m-1 rounded">
            <p>L'on pourra recupérer des valeurs lors d'un evenements sur un input.</p>
            <p>Pour cela, on peut utiliser l'événement onChange pour récupérer la valeur saisie par l'utilisateur.</p>
            <p>la valeur sera transmise a travers un event  (event.target.value)</p>
            <p>Il sera possible de desactiver le comportement par défaut d'un événement en utilisant la méthode preventDefault().</p>
        </div>
    </div>

    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <h2 className="text-center">Evenements avec input</h2>
        <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
        <pre className="card bg-white mt-1 text-left">
            {`function MonComposant() {
                function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                    alert('Nouvelle valeur: ' + event.target.value);
                }

                return (
                    <input type="text" onChange={handleChange} />
                );
            }`}
        </pre>

    </div>


    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <h2 className="text-center">Evenements avec input et preventDefault</h2>
        <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">Un input qui affiche une alerte lors du changement de valeur</p>
        <pre className="card bg-white mt-1 text-left">
            {`function MonComposant() {
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    );
}`}
        </pre>
        <div className="w-25 text-center m-auto mt-1 mb-1">
                <MonComposantInput />
        </div>
    </div>

    </>
)
}

function MonComposantClick() {

    function handleClick() {
        alert('Bouton cliqué!');
    }

    return (
        <button onClick={handleClick}>
            Cliquez-moi
        </button>
    );
}

function MonComposantInput() {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    );
}

export default DemoEvenements;