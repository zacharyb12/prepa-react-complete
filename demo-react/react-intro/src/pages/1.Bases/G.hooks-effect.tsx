import { useEffect, useState } from 'react';

function HooksEffect() {
const [activeDemo, setActiveDemo] = useState(false);

    return (
        <>
            <h1 className="text-center mt-3">Hooks - useEffect</h1>


            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Le hook <code>useEffect</code> permet de gérer les effets de bord dans les composants fonctionnels React. Il est utilisé pour exécuter du code en réponse à des changements d'état ou de props, ou lors du montage et du démontage du composant.</p>
                    <p>Donc il y a deux utilisations principales :</p>
                    <ul className="list-unstyled">
                        <li>Exécuter du code lors du montage OU démontage du composant</li>
                        <li>Exécuter du code lors de la mise à jour des props ou de l'état</li>
                    </ul>
                    <p>la syntaxe de useEffect est la suivante :</p>
                    <pre className="text-center">
                        {`useEffect(() => {  Code à exécuter }, [ dépendances ]);`}
                    </pre>
                </div>
            </div>


            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Premier cas , Executer du code lors d'un changement d'état :</p>
                    <p>Ici on utilise le tableau de useEffect pour passer les variables a observer :</p>
                </div>

            </div>

            <div className="card bg-secondary w-75 m-auto mt-3 p-1">
                <div className="card bg-white ">
                    <pre className="text-center">
                        {`useEffect( () => {   console.log(\`Nouvelle valeur de count: \${count}\`);  }, [count]); // ici count est la variable observée  }
`}
                    </pre>
                </div>
            </div>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Deuxième cas , Executer du code lors du montage du composant :</p>
                    <p>Ici on passe un tableau vide a useEffect pour indiquer qu'on ne veut observer aucune variable, donc le code s'exécutera une seule fois lors du montage du composant :</p>
                </div>
            </div>

            <div className="card bg-secondary w-75 m-auto mt-3 p-1">
                <div className="card bg-white ">
                    <pre className="text-center">
                        {`import React, { useEffect } from 'react';

function App() {

    useEffect(() => {

        console.log('Le composant est monté');

    }, []); // tableau vide, donc s'exécute une seule fois

    return <div>Mon App</div>;
}

export default App;
`}
                    </pre>
                </div>
            </div>

            <div className="card w-75 bg-primary mt-3 ">
                <div className="card bg-white m-auto p-1">
                    <p>Ensuite Il est possible d'effectuer une action lors du demontage du composant </p>
                    <p>Ici on retourne une fonction de nettoyage dans useEffect qui sera appelée lors du démontage du composant </p>
                    <p>Cette fonction peut être utilisée pour annuler des abonnements, des timers, ou toute autre opération asynchrone en cours.</p>
                    <p>Le return de useEffect doit toujours retourner une fonction, même si c'est une fonction vide, elle sera appelée lors du démontage du composant.</p>
                </div>
            </div>

            <div className="card p-1 bg-secondary m-auto mt-3 w-75">
                <div className="card bg-white ">
                    <pre className="text-center">
                        {`import React, { useEffect } from 'react';

function App() {

    useEffect(() => {

        return () => {
            console.log('Le composant est démonté');
        };

    }, []);

    return <div>Mon App</div>;
}

export default App;
`}
                    </pre>
                </div>
            </div>

            <div>
                
                <h2 className="text-center mt-3">Exemple complet :</h2>
                <div className="text-center mb-2 mt-2">
                    <button onClick={() => setActiveDemo(!activeDemo)}>
                        {activeDemo ? 'Cacher l\'exemple' : 'Montrer l\'exemple'}
                    </button>
                </div>
                {activeDemo ? (
                    <DemoEffect />
                ) : null}
            </div>

        </>
    )
}


function DemoEffect() {

  const [count, setCount] = useState(0);

  const [running, setRunning] = useState(false);

  
  
  useEffect(() => {
      let timer : number;
      if (running) {
        timer = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }


    console.log(`Effet exécuté. Compteur en cours : ${running}`);

    return () => {
      console.log("Nettoyage : arrêt du timer");
      clearInterval(timer);
    };
  }, [running]);

  return (
    <div className="card w-25 m-auto text-center mt-2">
      <button onClick={() => setRunning(!running)}>
        {running ? "Stopper" : "Démarrer"} le compteur
      </button>
      <p>{count}</p>
    </div>
  );
}


export default HooksEffect
