import { useState,useEffect } from "react";

function UseEffectPage(){

    const [count, setCount] = useState(0);
    const [showCounter, setShowCounter] = useState(true);

    useEffect(() => {
        let interval: number;
        
        if (showCounter) {
            // Démarrer un intervalle quand showCounter est true
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
            
            console.log("Compteur démarré");
        }
        
        // Fonction de nettoyage
        return () => {
            if (interval) {
                clearInterval(interval);
                console.log("Intervalle nettoyé");
            }
        };
    }, [showCounter]);

    // Reset du compteur quand on cache le composant
    useEffect(() => {
        if (!showCounter) {
            setCount(0);
        }
    }, [showCounter]);
    return (
        <>
            <h1>useEffect</h1>

            <div>
                <p>UseEffect permet de gérer les effets de bord dans les composants fonctionnels.</p>
                <p>Il s'utilise avec une fonction de rappel qui s'exécute après le rendu du composant.</p>
                <p>Ce qui permet d'écouter les changements d'une ou plusieurs valeurs et d'agir en conséquence.</p>
            </div>
            <div>
                <p>Chargement et nettoyage du composant</p>
                <p>Le nettoyage se fait en retournant une fonction de nettoyage dans useEffect.</p>
                <p>Cette fonction sera appelée lorsque le composant sera démonté ou lorsque les dépendances changent.</p>
                <p>Tout les composants ne necessite pas un nettoyage , mais certains peuvent causer des fuites de mémoire.</p>
</div>

<div>
    <button onClick={() => setShowCounter(!showCounter)}>Show Counter</button>
    {showCounter ? 
 <p>Count : {count}</p>
    : null
    }
</div>
<div>
    <p>Ici un exemple d'utilisation de useEffect , le composant MonComposant se monte et se démonte.</p>
    <p>Vous pouvez voir les messages dans la console lors du montage et du démontage.</p>

                <pre className="card bg-white mt-1 text-left">
{`import { useEffect } from "react";
function MonComposant() {
    useEffect(() => {
        // Code à exécuter lors du montage du composant
        console.log("Composant monté");
        return () => {
            // Code de nettoyage lors du démontage du composant
            console.log("Composant démonté");
        };
    }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois au montage
    return <div>Mon Composant</div>;
    }`}
                </pre>
    </div>
            
            <div>
                <p>Voici un autre exemple d'utilisation de useEffect avec des dépendances.</p>
                <p>Dans cet exemple, l'effet s'exécute à chaque fois que la valeur de compteur change.</p>
                <pre className="card bg-white mt-1 text-left">
{`import { useState, useEffect } from "react";
function Compteur() {
    const [compteur, setCompteur] = useState(0);
    useEffect(() => {
        // Code à exécuter lorsque compteur change
        console.log("Le compteur a changé :", compteur);
    }, [compteur]);
    return (
        <div>
            <h2>Compteur : {compteur}</h2>
            <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
        </div>
    );}`}
                </pre>
            </div>
        </>
    )
}

export default UseEffectPage;