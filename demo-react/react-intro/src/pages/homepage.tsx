// import Counter from "../components/counter";
// import type { Item } from "../models/item";

// import { useState } from "react";


function Homepage() {

  return (
    <>
      <h1 className="text-center mt-3">React</h1>

      <div className="p-1 mt-3 border rounded shadow m-2">
        <h3 className='text-center'>Présentation de React</h3>
        <p>React est une bibliothèque JavaScript populaire pour construire des interfaces utilisateur, développée par Facebook. Elle permet de créer des applications web dynamiques et réactives en utilisant des composants réutilisables.</p>
        <p>React utilise un DOM virtuel pour optimiser les mises à jour de l'interface utilisateur, ce qui améliore les performances des applications.</p>
        <p>Une Application React sera composée de plusieurs composants imbriqués les uns dans les autres, formant ainsi une arborescence.</p>
      </div>

      <div className="bg-primary p-2 mt-3 border rounded shadow m-2">
        <h3 className="text-center p-1">Creation d'une Application React</h3>
        <ul className="bg-white p-1 rounded list-unstyled text-center">
          <li className='mt-1'>Installation : npm create vite@latest</li>
          <li className='mt-1'>point d'entrée : src/main.tsx vers index.html</li>
          <li className='mt-1'>structure du projet : npm , config - .json , .ts , src</li>
          <li className='mt-1'>App : fichier principale de l'application</li>
        </ul>
      </div>

      <div className="bg-primary p-2 mt-3 border rounded shadow m-2">
        <h3 className="text-center p-1">Commandes React</h3>
        <ul className="bg-white p-1 rounded list-unstyled text-center">
          <li className='mt-1'>Demarrer le serveur : npm run dev</li>
          <li className='mt-1'>Build de production : npm run build</li>
          <li className='mt-1'>Previsualiser le build : npm run preview</li>
        </ul>
      </div>

            <div className="bg-primary p-2 mt-3 border rounded shadow m-2">
        <h3 className="text-center p-1">Structure d'une Application React</h3>
        <ul className="bg-white p-1 rounded list-unstyled text-left">
          <li className='mt-1 ml-1'><strong>Config</strong> : dossier contenant les fichiers de configuration (vite.config.ts,package.json,etc.)</li>
          <li className='mt-1 ml-1'><strong>APP</strong> : Fichier principale de l'application</li>
          <li className='mt-1 ml-1'><strong>index</strong> : Page principale</li>
          <li className='mt-1 ml-1'><strong>src</strong> : dossier contenant les fichiers sources</li>
          <li className='mt-1 ml-1'><strong>assets</strong> : dossier pour les fichiers statiques (images, polices, etc.) qui peuvent être redimensionnés</li>
          <li className='mt-1 ml-1'><strong>public</strong> : dossier pour les fichiers statiques (images, polices, etc.) qui ne seront pas traités par Vite</li>
          <li className='mt-1 ml-1'><strong>components</strong> : dossier pour les composants réutilisables</li>
          <li className='mt-1 ml-1'><strong>pages</strong> : dossier pour les composants de page</li>
        </ul>
      </div>

    </>
  )
}

// Demo Events -----------------------------------------------------------
// function ClickButton() {

//   const handleClick = () => { alert('Button clicked!'); };

//   return (
//     <button onClick={handleClick}> Click me </button>
//   );
// }

// -----------------------------------------------------------------------

// Demo Input ------------------------------------------------------------
// function TextInput() {


//   const handleChange = function(event: React.ChangeEvent<HTMLInputElement>) {
//     const newValue = event.target.value;
//     console.log('Valeur de input : ', newValue);
//   }; 

//   return (
//     <input type="text" onChange={handleChange} />
//   );
// }

// -----------------------------------------------------------------------

// useState Demo -------------------------------------------------------
// function Counter() {

//   const [value, setValue] = useState(0);

//   const multiply = () => {
//     setValue(value * 2);
//   };

//   return (
//     <div>
//         <p>valeur : {value}</p>

//         <button onClick={multiply}>Multiplier</button>
//     </div>
//   );
// }

// -----------------------------------------------------------------------

// Formulaires -------------------------------------------------------
// function NameForm() {
//   const [name, setName] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     alert('Un nom a été soumis : ' + name);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nameInput">Nom :</label>
//       <input
//         type="text"
//         id="nameInput"
//         value={name}
//         onChange={handleChange}
//       />
//       <button type="submit">Soumettre</button>
//     </form>
//   );
// }
// -----------------------------------------------------------------------

export default Homepage;