import { useState } from "react";

function FormulairesDemo() {
    return (
        <>
        <h1 className="text-center mt-5">Formulaires</h1>

        <div className="bg-primary card p-1 w-75 m-auto mt-3">
            <div className="bg-white p-1 m-1 rounded">
                <div className="p-1 w-75 m-auto text-center">

                <h4>Les Formulaires avec React utiliserons certaines balises</h4>
                    <ul className="list-unstyled">
                        <li>form</li>
                        <li>input</li>
                        <li>textarea</li>
                        <li>select</li>
                        <li>label</li>
                    </ul>
                </div>

                <div className="p-1  m-auto">

                <h4 className="text-center">Différences entre les balises HTML et JSX :</h4>
                <ul className="list-unstyled mt-1">
                    <li>L’événement « onChange » se déclenche dès qu’il y a un changement de valeur.</li>
                    <li>La balise « textarea » utilise l’attribut “value” et s'écrit en mono-ligne.</li>
                    <li>La balise « select » possède un attribut “value” pour sélectionner la valeur utiliser,
                    cela permet d’éviter l’utilisation de l’attribut “selected” sur une des options.</li>
                    <li>L'attribut “for” de la balise « label » est remplacé par “htmlFor”.</li>
                </ul>
                </div>
            </div>
        </div>

<div className="bg-primary card p-1 w-75 m-auto mt-3">
            <div className="bg-white p-1 m-1 rounded">
                <div className="p-1 w-75 m-auto text-center">

                <h4>Les Formulaires et le useState</h4>
                <p>On utilisera la valeur de l'input pour mettre à jour l'état du composant.</p>
                <p>On utilisera l'état du composant pour mettre à jour la valeur de l'input.</p>
                <p>Cela permet de lier la valeur de l'input à l'état du composant.</p>
                <p>On parle alors de composant contrôlé.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-center mt-5">Exemple de formulaire contrôlé</h2>
            <div className="bg-primary m-auto mt-3 w-75 card p-1">
            <Formulaire />
            </div>
        </div>
            
    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <div className="bg-white p-1 m-1 rounded">
        <p>Lors d'un changement de valeur de l'input, la variable state du composant est mis à jour.</p>
        <p>Lors de la soumission du formulaire, on empêche le comportement par défaut.</p>
        <p>Et on utilise les valeurs des states pour traiter l'information</p>
        <p>Ici on log simplement les valeurs dans la console.</p>
        </div>
        <pre className="card bg-white mt-1 text-left">
            {`function Formulaire(){

    const [name, setName] = useState("");
    const [password , setPassword] = useState("");

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log({name, password});
    }

    return (
        <>

        <form onSubmit={submit}>

            <label htmlFor="name">Name :</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="password">Password :</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Submit</button>

        </form>

        </>
    )
}`}
        </pre>
        </div>

        <div>
            <h2 className="text-center mt-5">Exemple de formulaire avec select</h2>
            <div className="bg-primary m-auto mt-3 w-75 card p-1">
            <FormulaireSelect />
            </div>
        </div>
            
    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <div className="bg-white p-1 m-1 rounded">
        <p>Ici on utilise la balise select pour créer un formulaire avec un choix multiple.</p>
        <p>Le fonctionnement est similaire à celui des inputs classiques.</p>
        </div>
        <pre className="card bg-white mt-1 text-left">
            {`function FormulaireSelect(){
    const [choice, setChoice] = useState("");

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log({choice});
    }

    return (
        <>

        <form onSubmit={submit}>

                <select value={choice} onChange={(e) => setChoice(e.target.value)}>

                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>

                </select>

            <button type="submit">Submit</button>

        </form>

        </>
    )
}`}
        </pre>
        </div>


        <div>
            <h2 className="text-center mt-5">Exemple de formulaire avec un seul state</h2>
            <div className="bg-primary m-auto mt-3 w-75 card p-1">
            <FormulaireUnSeulState />
            </div>
        </div>
            
    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <div className="bg-white p-1 m-1 rounded">
        <p>La différence ici est que nous utilisons un seul state pour gérer l'ensemble des données du formulaire.</p>
        <p>Lors d'un changement de valeur de l'input, on met à jour l'objet state en copiant les valeurs précédentes et en modifiant uniquement la valeur concernée.</p>
        </div>
        <pre className="card bg-white mt-1 text-left">
            {`function FormulaireUnSeulState(){

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
        <form onSubmit={submit} className="text-center">

                <label htmlFor="name">Name :</label>

                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
 

                <label htmlFor="password">Password :</label>

                <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />

            <button type="submit">Submit</button>
        </form>
        </>
    )
}`}
        </pre>
        </div>

         <div>
            <h2 className="text-center mt-5">Exemple de formulaire avec readonly</h2>
            <div className="bg-primary m-auto mt-3 w-75 card p-1">
            <FormulaireReadOnly />
            </div>
        </div>
            
    <div className="bg-secondary m-auto mt-3 w-75 card p-1">
        <div className="bg-white p-1 m-1 rounded">
        <p>Pour que l'input soit en readonly il suffit d'ajouter l'attribut <code>readOnly</code> sur l'input.</p>
        </div>
        <pre className="card bg-white mt-1 text-left">
            {`function FormulaireReadOnly(){
    return (
        <>
        <form>
            
                <label htmlFor="name">Name :</label>
                <input type="text" value="John Doe" readOnly />

                <label htmlFor="password">Password :</label>
                <input type="password" value="password123" readOnly />

        </form>
        </>
    )
}`}
        </pre>
        </div>

        <div className="card mt-3 w-75 text-center">
            <h2>On retrouve deux types de formulaires</h2>
            <ul>
                <li>Les formulaires controlé</li>
                <li>Les formulaires non controlé</li>
            </ul>

            <p>Un formulaire non-controlé consiste a recuperer les valeurs directement dans l'input </p>
            <p>Un formulaire controlé consiste a recuperer les valeurs via des states</p>

        </div>

                <div className="card mt-3 w-75 text-center">
            <h2>Les messages d'erreur</h2>
            <div>
                <p>Les messages d'erreur permettent d'informer l'utilisateur sur les problèmes rencontrés lors de la soumission d'un formulaire.</p>
                <p>Ils peuvent être affichés de différentes manières, par exemple en dessous des champs de saisie concernés.</p>
            </div>

            <div>
                <p>Pour afficher les messages d'erreur, vous pouvez utiliser un état local pour stocker les erreurs et les afficher conditionnellement dans le rendu.</p>
                <p>La methode la plus utlisé est d'utiliser un tableau d'erreurs et de le mettre à jour lors de la soumission du formulaire.</p>
            </div>
            <div>
                <p>Voici un exemple simple :</p>
                <pre>{`
const [errors, setErrors] = useState([]);
function handleSubmit(e) {
    e.preventDefault();
    const newErrors = [];
    if (e.target.username.value === "") {
        newErrors.push("Le nom d'utilisateur est requis.");
    }
    if (e.target.password.value.length < 6) {
        newErrors.push("Le mot de passe doit contenir au moins 6 caractères.");
    }
    setErrors(newErrors);
}
                `}</pre>
            </div>
        </div>
        </>
    )
}

function Formulaire(){
    const [name, setName] = useState("");
    const [password , setPassword] = useState("");

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log({name, password});
    }

    return (
        <>
        <form onSubmit={submit} className="text-center">
            <div className="p-05">
                <label htmlFor="name">Name :</label>
                <br />
                <input type="text" className="rounded text-center" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="p-05">
                <label htmlFor="password">Password :</label>
                <br />
                <input type="password" className="rounded text-center" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

function FormulaireSelect(){
    const [choice, setChoice] = useState("");

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log({choice});
    }

    return (
        <>
        <form onSubmit={submit} className="text-center">
            <div className="p-05">
                <label htmlFor="name">Name :</label>
                <br />
                <select value={choice} onChange={(e) => setChoice(e.target.value)}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

function FormulaireUnSeulState(){

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    function submit(e: React.FormEvent){
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
        <form onSubmit={submit} className="text-center">

                <label htmlFor="name">Name :</label>

                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
 

                <label htmlFor="password">Password :</label>

                <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

function FormulaireReadOnly(){
    return (
        <>
        <form className="text-center">
            <div className="p-05">
                <label htmlFor="name">Name :</label>
                <br />
                <input type="text" className="rounded text-center" id="name" value="John Doe" readOnly />
            </div>
            <div className="p-05">
                <label htmlFor="password">Password :</label>
                <br />
                <input type="password" className="rounded text-center" id="password" value="password123" readOnly />
            </div>
        </form>
        </>
    )
}

export default FormulairesDemo;