import axios from 'axios';

// axios.create nos permite crear una configuracion estandar que nos ayuda a no tener que estar repitiendo el codigo varias veces, esto es util para cuando tenemos que mandar un token de autenticacion en cada una de las peticiones en el header, almacenar el host de la api, etc.
export const pokemonApi = axios.create({
  //baseURL es una propiedad de axios.create que almacena el host de mi api para despues poder usar la constante pokemonApi y realizar las peticiones que necesite agregando lo que resta de la api dentro de los parentesis, por ejemplo: const { data } = await pokemonApi.get('/pokemon?limit=10'), esto es muy util para no repetir datos de las apis que no cambian como el host
  baseURL: 'https://pokeapi.co/api/v2',
});
