import { useEffect, useState } from "react";
import axios from "axios";

interface Character {
    id: number;
    name: {
        first: string;
        last: string;
    };
}

function ComponentAjax() {
    const [data, setData] = useState<Character[]>([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {
        if (fetchData) {
            axios.get('https://api.sampleapis.com/futurama/characters')
            .then((response) => setData(response.data))
            .catch((error: { message: string }) => console.error('Error fetching data:', error.message));
        }
    }, [fetchData]);

    return (
        <>
            <h1>Les requêtes Ajax</h1>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Pour effectuer des requêtes Ajax, il est possible d'utiliser la librairie Axios (ce qui simplifie grandement les appels HTTP).</p>
                    <p>Il suffira d'installer Axios et de l'utiliser pour effectuer des requêtes HTTP.</p>
                    <code>npm install axios</code>
                    <p>Les requêtes doivent être effectuées dans un effet secondaire (hook useEffect) pour éviter les appels multiples lors des re-rendus.</p>
                </div>
            </div>

            <div className="card bg-secondary w-75 m-auto mt-3 p-1">
                <div className="card bg-white">
                    <pre>
                        {`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api.example.com/data')
            .then(response => {
                setData(response.data);
            });
    }, []);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DataFetcher;`}
                    </pre>
                </div>
            </div>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p>Exemple de consommation d'une api : 
                        <button onClick={() => setFetchData(!fetchData)} className="">
                            Consommer l'API
                        </button> 
                    </p>

                    <div className="card w-75 m-auto">
                            {fetchData ? (
                                <div>
                                    {data.map((character) => (
                                        <div key={character.id} className="card bg-white m-2 p-2">
                                            <h3>{character.name.first} {character.name.last}</h3>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                    </div>
                </div>
            </div>

            <div className="card bg-primary w-75 m-auto mt-3 p-1">
                <div className="card bg-white m-auto p-1">
                    <p className="text-center mt-1">Exercice : Consomer une api de votre choix : <pre className="text-center mt-1">{`https://www.sampleapis.com`}</pre></p>
                </div>
            </div>
        </>
    );
}

export default ComponentAjax;