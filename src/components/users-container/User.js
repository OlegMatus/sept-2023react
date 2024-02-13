const User = ({user: {id, name, username}}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            {/*<button>save</button>*/}
        </div>
    );
};

export {User};