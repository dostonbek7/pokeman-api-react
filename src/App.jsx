import { useState } from "react";
import useFetch from "./hook/useFetch";

function App() {
  let random = Math.floor((Math.random() * 50)+1);
  const [id, setId] = useState(random);
  const { data, isPending, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return (
    <div>
      <div className="max-container">
        {data && (
          <div className="pt-20 flex justify-center items-center flex-col">
            <div className="relative w-[350px] md:w-[500px] p-5 border shadow-md rounded-lg mb-4">
              <span className="absolute top-5 right-5 bg-black text-white px-2 py-1 rounded-md">
                Hp {data.stats[0].base_stat}
              </span>
              <img
                className="mb-5 pt-4 mx-auto object-cover h-[250px]"
                src={data.sprites.other.dream_world.front_default}
                alt=""
              />
              <h1 className="text-center text-2xl text-orange-500 font-bold mb-4">
                {data.name}
              </h1>
              <h3 className="px-4 py-2 bg-orange-400 rounded-md text-white text-center font-semibold mb-4">
                {data.types[0].type.name}
              </h3>
              <ul className="flex items-center justify-between gap-4 list-none">
                <li className="px-4 py-2 bg-slate-100">
                  <p className="mb-2 text-lg font-medium text-center">
                    {data.stats[1].base_stat}
                  </p>
                  <span className="capitalize text-center font-semibold text-xl">
                    {data.stats[1].stat.name}
                  </span>
                </li>
                <li>
                  <p className="mb-2 text-lg font-medium text-center">
                    {data.stats[2].base_stat}
                  </p>
                  <span className="capitalize text-center font-semibold text-xl">
                    {data.stats[2].stat.name}
                  </span>
                </li>
                <li>
                  <p className="mb-2 text-lg font-medium text-center">
                    {data.stats[5].base_stat}
                  </p>
                  <span className="capitalize text-center font-semibold text-xl">
                    {data.stats[5].stat.name}
                  </span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setId(random)}
              className="px-5 py-3 bg-black text-white text-xl rounded-md"
            >
              Generate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
