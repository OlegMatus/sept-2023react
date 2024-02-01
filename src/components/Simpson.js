const Simpson = ({simpson}) => {
    const {id, name, surname, age, gender, image} = simpson;

    return (
        <div>
            <h1>id: {id}</h1>
            <h1>name: {name}</h1>
            <h1>surname: {surname}</h1>
            <h4>age: {age}</h4>
            <h4>gender: {gender}</h4>
            <img src={image} alt={name} width={300} height={300}/>
        </div>
    );
};

export {Simpson};