const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character;

    return (
        <div>
            <h1>id: {id}</h1>
            <h1>name: {name}</h1>
            <h4>status: {status}</h4>
            <h4>species: {species}</h4>
            <h4>gender: {gender}</h4>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};