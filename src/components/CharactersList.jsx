import { useState, useEffect } from "react";
import Character from "./Character";
import Button from "./Button";

// NAVIGATION
function NavPage({ page, setPage }) {
  return (
    <>
      <button
        className="text-xl text-white bg-black py-2 border-4 px-5 md:hidden fixed right-1 top-2 z-40 font-bold rounded-full shadow-md shadow-black "
        onClick={() => {
          const nav = document.querySelector(".header");
          nav.classList.toggle("-translate-y-full");
          console.log(nav);
        }}
      >
        Menu
      </button>
      <header className="header flex justify-around items-center transition-all bg-white/90 py-3 fixed right-0 left-0 top-0 md:flex-row gap-5 flex-col -translate-y-full md:translate-y-0">
        <div className="flex justify-between w-full px-5 md:w-auto">
          <p className="text-xl text-black font-bold border-b-4 border-black">
            Page: {page}
          </p>
        </div>
        <Button setPage={setPage} page={page} id={1}>
          Back
        </Button>
        <h1 className="text-5xl font-black text-black">Rick and Morty</h1>
        <Button setPage={setPage} page={page} id={2}>
          Next
        </Button>
      </header>
    </>
  );
}

function CharactersList() {
  // STATE
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // EFFECT
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();
      setCharacters(data.results);
      setLoading(false);
    }

    loadData();
  }, [page]);

  // UI
  return (
    <div className="container mx-auto mt-36">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1 className="text-4xl text-center font-black">Loading...</h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CharactersList;
