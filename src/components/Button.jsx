const Button = ({ setPage, page, id, children }) => {
  // cambiar de pagina
  function changePage() {
    if (page >= 1 && id === 2) {
      setPage((page += 1));
    } else if (id === 1 && page >= 2) {
      setPage((page -= 1));
    }
  }

  // componente boton
  return (
    <button
      className="text-black bg-white py-2 border-4 px-5 font-bold uppercase rounded-full hover:bg-slate-900 transition-all hover:text-white text-xl shadow-md shadow-black select-none"
      onClick={changePage}
    >
      {children}
    </button>
  );
};

export default Button;
