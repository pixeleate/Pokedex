import { useState } from 'react';
import type { NextPage } from 'next';
import { PlusIcon } from '@heroicons/react/24/solid';

import usePokemon from '../hooks/usePokemon';
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';
import PokemonDetails from '../components/Details';

const Home: NextPage = () => {
  const { bgColor, response, loading, setPokemonId } = usePokemon();
  const [isOpen, setIsOpen] = useState(false);
  const [customPokemon, setCustomPokemon] = useState<any>(null);
  const [newPokemons, setNewPokemons] = useState<any>([]);

  const onSubmit = (formValues: any) => {
    const stats = [];

    for (const key in formValues) {
      if (key != 'imageUrl') {
        stats.push({
          base_stat: formValues[key],
          stat: {
            name: key,
          },
        });
      }
    }
    setNewPokemons([
      ...newPokemons,
      {
        name: formValues.name,
        imageUrl: formValues.imageUrl,
        stats,
      },
    ]);
    setIsOpen(false);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col h-screen relative"
    >
      <div className="flex flex-row h-full">
        {!loading && (
          <Navigation
            loadingPokemon={loading}
            selectPokemon={setPokemonId}
            activePokemon={response.name}
            newPokemons={newPokemons}
            selectCustomPokemon={setCustomPokemon}
          />
        )}
        <div className="flex flex-1 justify-center items-center">
          {!loading && (
            // Pokemon Layout
            <div className="relative flex flex-col justify-center items-center">
              {/* Heading Component */}
              <h1 className="text-[200px] font-bold opacity-30 z-10 leading-[150px] capitalize">
                {customPokemon ? customPokemon.name : response.name}
              </h1>
              <PokemonDetails response={customPokemon || response} />
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} />
      <button
        className="absolute flex w-30 h-30 bg-red-700 rounded-full bottom-0 right-0 m-5"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-20 w-20 text-white" />
      </button>
    </div>
  );
};

export default Home;
