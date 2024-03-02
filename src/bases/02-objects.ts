export const pokemonIds = [1, 20, 30, 34, 66];

// pokemonIds.push('abcde');
pokemonIds.push(+'0');

console.log(pokemonIds);

// objeto sin interface
export const pokemon = {
    id: '1',
    name: 'Pikachu'
}

// interface
interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

// objeto con interface
export const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu'
}
export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}

export const pokemons: Pokemon[] = [];

pokemons.push(pikachu, charmander);

console.log(pokemons);
