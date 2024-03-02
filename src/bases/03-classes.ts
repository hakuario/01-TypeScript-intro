//import { charmander } from './02-objects';
import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
/*
export class Pokemon {
    ojos = 2;
    patas = 2;
    tipo = 'Fire';
}
*/

// -- clase: declaracion larga
/*
export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log('desde el constructor');
    }
}
*/

// -- clase: declaracion corta
export class Pokemon {

    // set y get
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    // --
    constructor(
        public id: number,
        public name: string,
        public readonly estado: boolean, // atributo de solo lectura
        // public imageUrl: string, // para GET y SET 'https://pokemon.com/4'

    ) { }

    // metodos. al no definir el nivel de acceso, el valor por default es PUBLIC
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);

    }

    // metodo asincrono - promesas
    async getMoves(): Promise<Move[]> {
        // return 10;

        // usando await (esperar a que termine la promesa)
        // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        // console.log(resp.data.moves );

        // usando await (esperar a que termine la promesa) + desestructurar
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;

    }
}

export const charmander = new Pokemon(4, 'Charmander', false);
// clase + constructor
console.log(charmander);
// metodo
charmander.scream()
charmander.speak()
// metodo asincrono - promesas
console.log(charmander.getMoves());
// charmander.getMoves()
