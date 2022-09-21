import { useEffect, useState } from 'react';
import getBgColor from '../utils/getBgColor';

const usePokemon = () => {
  const [pokemonId, setPokemonId] = useState<number | string>(1);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        getBgColor(
          response.sprites.other['official-artwork'].front_default,
          setBgColor
        );
        setLoading(false);
      });
  }, [pokemonId]);

  return { loading, response, setPokemonId, bgColor };
};

export default usePokemon;
