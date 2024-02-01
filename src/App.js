import {Simpson} from "./components/Simpson";
// import css from "./App.css"
import css from "./components/component.module.css"
import {Character} from "./components/Character";

const App = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            gender: 'male',
            image: 'https://www.freepnglogos.com/uploads/simpsons-png/homer-simpson-simpsons-wiki-fandom-powered-wikia-39.png'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            gender: 'female',
            image: 'https://www.freepnglogos.com/uploads/simpsons-png/thomas-dafoe-studios-the-simpsons-png-pack-40.png'
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            gender: 'male',
            image: 'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-cartoon-characters-new-png-34.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            age: 8,
            gender: 'female',
            image: 'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-lisa-simpson-dhamma-wiki-21.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            gender: 'female',
            image: 'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-maggie-simpson-wikipedia-3.png'
        }
    ]
    const characters = [
        {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: "Human",
            gender: 'Male',
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id: 3,
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        },
        {
            id: 4,
            name: 'Beth Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
        },
        {
            id: 5,
            name: 'Jerry Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
        },
        {
            id: 6,
            name: 'Abadango Cluster Princess',
            status: 'Alive',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
        }
    ]

    return (
        <div className={css.MainBlock}>
            <div  className={css.SimpsonBlock}>
                <h1 className={css.Header}>Simpson Family:</h1>
                {simpsons.map(simpson => <Simpson simpson={simpson} key={simpson.id}/>)}
            </div>
            <div className={css.CharacterBlock}>
                <h1 className={css.Header}>Characters:</h1>
                {characters.map(character=> <Character character={character} key={character.id}/>)}
            </div>
        </div>
    );
};

export {App};