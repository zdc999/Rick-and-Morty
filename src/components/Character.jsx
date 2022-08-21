function Character({ character }) {
  const { id, name, image } = character;

  // componente personaje
  return (
    <div>
      <h2 className="text-center mb-10 text-2xl font-bold bg-white rounded-full text-black">
        {name}
      </h2>
      <img className="rounded-full mx-auto" src={image} alt={name} />
      <p className="text-center text-lg pt-5">
        Origin: {character.origin.name}
      </p>
    </div>
  );
}

export default Character;
