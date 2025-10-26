function ExoCreationComposant(props : {name : string,age : number}) {
    return (
        <div className="bg-white card mt-3 w-75">
            <p style={{ fontSize: 40 , fontWeight: "bold"}}>Bienvenue {props.name} sur l'application React !</p>
            <p style={{ fontSize: 20 }}>Vous avez {props.age || 18} ans !</p>
        </div>
    )
}

export default ExoCreationComposant;