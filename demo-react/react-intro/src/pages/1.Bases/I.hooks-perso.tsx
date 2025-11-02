function HooksPersoPage(){
    return (
        <>
            <h1>Hooks Personnalisé</h1>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                <p>Il sera possible de creer un hook personnalisé pour encapsuler la logique de récupération des données.</p>
                <p>Un hook personnalisé est une fonction JavaScript dont le nom commence par "use" et qui peut appeler d'autres hooks React.</p>
                <p>Quelques regles pour les hook personnalisé :</p>
                <ul>
                    <li>Les hooks personnalisés doivent commencer par "use".</li>
                    <li>Ils doivent être appelés dans le corps d'un composant fonctionnel ou d'un autre hook.</li>
                    <li>Ils peuvent utiliser d'autres hooks React.</li>
                </ul>
            </div>
            </div>

            <div className="card bg-secondary w-75 m-auto mt-3 p-1">
                <div className="card bg-white">
                    <pre>
{`import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;`}
                    </pre>
                </div>
            </div>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Creer des hooks personnalisé sert à réutiliser la logique d'état et d'effet dans plusieurs composants.</p>
                    <p>Imaginons un scénario où nous avons plusieurs composants qui doivent récupérer des données d'une API. Au lieu de dupliquer la logique de récupération des données dans chaque composant, nous pourrions créer un hook personnalisé qui encapsule cette logique.</p>
                    <p>Ce hook pourrait être utilisé dans chaque composant qui a besoin de récupérer ces données, ce qui simplifie le code et le rend plus maintenable.</p>
                </div>
            </div>
        </>
    )
}

export default HooksPersoPage;