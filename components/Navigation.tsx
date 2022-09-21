import {
  ChevronUpIcon,
  ChevronDownIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import usePaginationFetch, { GetAPIUrl } from '../hooks/usePaginationFetch';

const getAPIUrl: GetAPIUrl = (page, pageSize) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
    page * pageSize
  }`;

const Navigation = (props: any) => {
  const {
    loading: loadingList,
    response: paginatedResponse,
    previousPage,
    nextPage,
  } = usePaginationFetch(getAPIUrl);

  const {
    loadingPokemon,
    activePokemon,
    selectPokemon,
    newPokemons,
    selectCustomPokemon,
  } = props;

  return (
    <div className="flex justify-center items-center min-h-full h-screen min-w-[250px]">
      {!loadingList && (
        <div className="px-10 flex flex-col items-center">
          <button onClick={previousPage}>
            <ChevronUpIcon className="transition h-20 w-20 text-black opacity-20 hover:opacity-75" />
          </button>
          <ul className="flex flex-col text-3xl items-center">
            {paginatedResponse?.results.map((pokemon) => (
              <li
                data-pokemon={pokemon.name}
                className="transition cursor-pointer hover:scale-125 hover:transition-all capitalize"
                style={{
                  opacity:
                    !loadingPokemon && activePokemon === pokemon.name
                      ? '100%'
                      : '30%',
                }}
                key={pokemon.name}
                onClick={() => {
                  selectCustomPokemon(null);
                  selectPokemon(pokemon.name);
                }}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
          {newPokemons.length > 0 && (
            <ul className="flex flex-col text-3xl items-center">
              {newPokemons.map((pokemon: any) => (
                <li
                  data-pokemon={pokemon.name}
                  className="flex transition cursor-pointer hover:scale-125 hover:transition-all capitalize items-center"
                  style={{
                    opacity:
                      !loadingPokemon && activePokemon === pokemon.name
                        ? '100%'
                        : '30%',
                  }}
                  key={pokemon.name}
                  onClick={() => selectCustomPokemon(pokemon)}
                >
                  {pokemon.name} <StarIcon className="w-7 h-7 text-black" />
                </li>
              ))}
            </ul>
          )}
          <button onClick={nextPage}>
            <ChevronDownIcon className="transition h-20 w-20 text-black opacity-20 hover:opacity-75" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
