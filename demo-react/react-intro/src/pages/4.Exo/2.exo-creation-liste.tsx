import type { Item } from "./0.models/1.list-item";

function ExoCreationListe() {

    const listeCourses : Item[] = [
        { id: 1, nom: 'Pommes', description: 'Pommes rouges fraîches', prix: 2.5, promo: false },
        { id: 2, nom: 'Bananes', description: 'Bananes mûres', prix: 1.8, promo: true },
        { id: 3, nom: 'Lait', description: 'Lait entier 1L', prix: 0.99, promo: false },
        { id: 4, nom: 'Pain', description: 'Baguette fraîche', prix: 1.2, promo: true },
        { id: 5, nom: 'Œufs', description: 'Boîte de 12 œufs', prix: 3.0, promo: false }
    ];
    return (
        <div>
            <h2>Exercice : Création d'une liste</h2>
            <GestionListe list={listeCourses} />
        </div>
    )
}

function GestionListe(props : {list: Item[]}) {
    return (
        <ul className="list-unstyled">
            {props.list.map( (element) => (<AffichageElement item={element} />) )}
        </ul>
    )
}

function AffichageElement(props :{item: Item}) {
    return (
        <li className="p-05 m-1 text-center card w-25" key={props.item.id}>
            <h3>{props.item.nom}</h3>
            <p>{props.item.description}</p>
            {props.item.promo ? <p style={{'backgroundColor':'red'}}>Prix: {props.item.prix} €</p> : <p>Prix: {props.item.prix}€</p>}

        </li>
    )
}

export default ExoCreationListe;