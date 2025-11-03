import { useState } from "react";

function AjaxPage(){

    const [data, setData] = useState({status: "", message: ""});

    async function getData(){
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const result = await response.json();
        setData(result);
    }

    return (
        <div>
            <h1>Demo Ajax avec useEffect</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Cliquez sur le bouton pour charger une image</p>
            )}

            {data ? (
                <img src={data.message} alt="" width={500} />
            ) : null}
            
            <button onClick={getData}>Charger une image</button>
        </div>
    )
}
export default AjaxPage;
