// Fonction Principale ------------------------------------------------------
function IntroComposant() {

  return (

    <div className="bg-white m-1">
      <h1 className="text-center mt-5 w-50 m-auto">Introduction au Composant</h1>
      
      <div className="card mt-3 bg-primary p-05">
        <div className="bg-white m-1 rounded">
        <p> Un composant est une brique réutilisable de l'interface utilisateur dans une application React. Il permet de diviser l'interface en parties indépendantes et réutilisables, facilitant ainsi la gestion et la maintenance du code.</p>
        <p> Ce sont des classes ES6 qui étendent la classe de base React.Component. Ils offrent plus de fonctionnalités, comme la gestion de l'état et des cycles de vie.</p>
        <p> Un composant peut être composé d'autres composants, ce qui permet de créer des interfaces utilisateur complexes à partir de blocs de construction simples.</p>
        </div>
      </div>

        <div className="card mt-3 bg-primary p-05 w-75">
            <div className="bg-white m-1 rounded text-center m-auto">
                <p>Un composant est tout simplement une fonction qui retourne un élément React.</p>
                <p>Un composant ne peut retourner qu'une seule balise parent peu importe le nombre d'éléments qu'il contient.</p>
            </div>
        </div>

      <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Simple</h2>
        <DemoComposant />
      </div>

              <div className="card mt-3 bg-primary p-05 w-75">
            <div className="bg-white m-1 rounded text-center m-auto">
                <p>Il existe une balise speciale appelé fragment qui permet de regrouper plusieurs éléments sans ajouter de nœud supplémentaire au DOM.</p>
                <p>La particularité des fragments est qu'ils ne créent pas de nœud supplémentaire dans le DOM contrairement a une autre balise comme <strong>div</strong> </p>
            </div>
        </div>

            <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Fragment</h2>
        <DemoComposantFragment />
      </div>

              <div className="card mt-3 bg-primary p-05 w-75">
            <div className="bg-white m-1 rounded m-auto">
                <h4 className="text-center p-1">Un composant pourra être stylisé de plusieurs manières.</h4>
        <ol className="p-1 ml-1">
                    <li>Utilisation de classes CSS</li>
                    <li>Styles en ligne</li>
                    <li>Bibliothèques de styles (ex : styled-components, emotion)</li>
                </ol>
            </div>
        </div>

      <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes</h2>
        <DemoComposantStyleClass />
      </div>

            <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Ligne</h2>
        <DemoComposantStyleligne />
      </div>

            <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes Librairie</h2>
        <DemoComposantStyleClassLibrairie />
      </div>

      <div className="bg-primary mt-3 card">
        <div className="bg-white m-1 rounded p-1">
        <h3 className="text-center">Règles des composants</h3>
        <ol className="mt-2 p-1">
            <li>Un composant doit commencer par une lettre majuscule.</li>
            <li>Les composants peuvent accepter des "props" (propriétés) pour personnaliser leur comportement et leur apparence.</li>
            <li>Un composant doit retourner un seul élément parent.</li>
        </ol>
        </div>
      </div>

        <div className="card mt-3 bg-primary p-05 w-75">
            <div className="bg-white m-1 rounded text-center m-auto">
                <p>Un composant peut recevoir des paramètres via ses "props".</p>
                <p>Les "props" sont des objets passés au composant lors de son appel, permettant de personnaliser son comportement et son apparence.</p>
            </div>
        </div>

      <div className="bg-secondary mt-3 card w-75">
        <h2 className="text-center mt-3">Demo Composant avec Props</h2>
        <DemoComposantProps />
      </div>

      <div className="bg-secondary mt-3 card w-75">
        <h2 className="text-center mt-3">Demo Composant avec Props nullables</h2>
        <DemoComposantPropsNullable />
      </div>
    </div>
  
);
}
// ----------------------------------------------------------------------------

// Demo Composant -------------------------------------------------------------
function DemoComposant(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div>Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant -------------------------------------------------------------
function DemoComposantFragment(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return (
                        <>
                            <div>Hello, World!</div>
                            <div>Hello, World!</div>
                            <div>Hello, World!</div>
                        </>
                    );
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------



// Demo Composant style Class-------------------------------------------------------------
function DemoComposantStyleClass(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div className="mon-style">Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant style ligne-------------------------------------------------------------
function DemoComposantStyleligne(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div style={{ color: 'red' }}>Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant style class librairie-------------------------------------------------------------
function DemoComposantStyleClassLibrairie(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div className="m-auto p-1 border rounded">Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------
// Demo Composant Props -------------------------------------------------------------
// Demo Composant Props -------------------------------------------------------------
function DemoComposantProps(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant avec Props</h4>
            <pre>
                {`function MonComposant(props : { name: string }) {
                    return <div>Hello, {props.name}!</div>;
                }`}
            </pre>

        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant Props valeurs nullables -------------------------------------------------------------
function DemoComposantPropsNullable(props: { title?: string, description?: string }) {
    return (
        <div className="bg-white card mt-3">
            <h2 className="text-center">{props.title || "Default Title"}</h2>
            {props.description ? <p>{props.description}</p> : null}
            <pre>
                {`function PropsExample(props: { title?: string, description?: string }) {
                    return (
                        <div>
                            <h2>{props.title || "Default Title"}</h2>
                            {props.description ? <p>{props.description}</p> : null}
                        </div>
                    );
}`}
            </pre>
        </div>
    );
}


export default IntroComposant;