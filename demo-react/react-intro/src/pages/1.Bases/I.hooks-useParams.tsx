function UseParamsPage(){
    return (
        <>
            <h1>useParams</h1>
            <div>
                <p>useParams est un hook fourni par React Router qui permet d'accéder aux paramètres de l'URL dans les composants fonctionnels.</p>
            </div>

            <div>
                <p>Il est particulièrement utile lorsque vous avez des routes dynamiques où une partie de l'URL peut varier.</p>
                <p>Par exemple, si vous avez une route définie comme /user/:id, vous pouvez utiliser useParams pour récupérer la valeur de id.</p>
            </div>

            <div>
                <p>Pour utiliser useParams, vous devez d'abord l'importer depuis react-router-dom.</p>
                <p>Ensuite definir une route avec un paramètre dynamique, par exemple : /user/:id</p>
                <p>Dans le composant qui redirige vers cette route, vous pouvez utiliser le hook useNavigate pour effectuer la redirection.</p>
                <p>Dans le composant rendu par cette route, vous pouvez appeler useParams pour obtenir un objet contenant les paramètres de l'URL.</p>
            </div>


            <div>
                <h3>Exemple useNavigate</h3>
                <pre>
                    {`import { useNavigate } from "react-router-dom";

                    function HomePage() {
                        const navigate = useNavigate();

                        function goToUserPage() {
                            navigate("/user/123");
                        }`}
                </pre>
            </div>

            <div>
                <h3>Exemple</h3>
                <pre>
                    {`import { useParams } from "react-router-dom";

                    function UserPage() {
                        const { id } = useParams();
                        return <h1>User ID: {id}</h1>;
                    }`}
                </pre>
            </div>

            <div>
                <p>Ce qui permet de recuperer une valeur dans un composant pour effectuer une requette</p>
                <pre>{`
import { useParams } from "react-router-dom";
import axios from "axios";
function UserProfile() {

    const { userId } = useParams();
    function getUserData(userId: string){
        // Logique pour récupérer les données de l'utilisateur en fonction de userId
        axios.get(\`/api/users/\${userId}\`)
            .then(response => {
                // Traiter la réponse de l'API
            })
            .catch(error => {
                // Gérer les erreurs
            });
    }
    return (
            <div>Profil de l'utilisateur {userId}</div>
            )
}`}</pre>
            </div>
        </>
    )
}

export default UseParamsPage;