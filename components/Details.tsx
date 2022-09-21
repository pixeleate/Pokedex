import Image from 'next/image';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const PokemonDetails = ({ response }: { response: any }) => {
  console.log(response);

  return (
    <div className="flex items-center">
      <div className="relative" style={{ height: '475px', width: '475px' }}>
        <Image
          src={
            response?.sprites?.other['official-artwork']?.front_default ||
            response.imageUrl
          }
          layout="fill"
          objectFit="contain"
          alt={response.name}
        />
      </div>
      {/* Stats */}
      <ul className="text-2xl text-black opacity-60 border-l-4 border-white border-opacity-30 ml-5 pl-10 font-semibold">
        {response.stats.map((stat: any, index: number) => (
          <li key={index} className="py-3 flex items-center">
            {stat.stat.name}{' '}
            <ArrowSmallRightIcon className="transition h-7 w-7 text-black opacity-50 mx-5" />{' '}
            {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
