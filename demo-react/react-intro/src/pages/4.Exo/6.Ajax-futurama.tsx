import { useState } from "react";

function AjaxFuturama(){

    const [personnages, setPersonnages] = useState<Personnage[]>([]);

    function getPersonnages(){
        fetch("https://api.sampleapis.com/futurama/characters")
        .then(response => response.json())
        .then(data => setPersonnages(data))
        .catch(error => console.error("Erreur lors du chargement des personnages :", error));
    }

    return (
        <>
        <h1>Personnages Futurama</h1>
        <button onClick={getPersonnages}>Charger les personnages</button>
        <ul>
            {personnages.map((personnage: Personnage) => (
                <CardPersonnage personnage={personnage} />
            ))}
        </ul>
        </>
    )
}

function CardPersonnage({ personnage }: { personnage: Personnage }) {
        const [isSayingOpen, setIsSayingOpen] = useState(false);
    return (
        <div className="card">
            <h2>{personnage.name.first} {personnage.name.middle} {personnage.name.last}</h2>
            <img src={personnage.images["main"]} alt={`${personnage.name.first} ${personnage.name.last}`} width={150} />
            <p>Espèce : {personnage.species}</p>
            <p>Planète d'origine : {personnage.homePlanet}</p>
            <p>Occupation : {personnage.occupation}</p>
            {isSayingOpen ? 
            <ul>
                <li><button onClick={()=> setIsSayingOpen(false)}>Close</button></li>
                {personnage.sayings.map((saying, index) => (
                    <li key={index}>"{saying}"</li>
                ))}
            </ul>
            : <button onClick={()=> setIsSayingOpen(true)}>Show</button>}
        </div>
    )
}

interface Personnage {
    "name": {
      "first": string,
      "middle": string,
      "last": string
    },
    "images": {
      "head-shot": string,
      "main": string
    },
    "gender": string,
    "species": string,
    "homePlanet": string,
    "occupation": string,
    "sayings": string[],
    "id": number,
    "age": string
  }

export default AjaxFuturama;