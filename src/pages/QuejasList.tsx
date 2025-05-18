import { ChangeEvent, useEffect, useState } from "react";
import { FeedbackService } from "../services/queja.services";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import Feedback from "../models/Queja";

function QuejaList() {
  const [quejas, setQuejas] = useState<Feedback[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [queryParams, setQueryParams] = useSearchParams();
  const titleQuery = queryParams.get("title") || "";

  useEffect(() => {
    FeedbackService.getAll()
      .then(setQuejas)
      .catch((error) => {
        setError(error instanceof Error ? error.message : "Error desconocido");
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [titleQuery]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setQueryParams(newTitle ? { title: newTitle } : {});
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("¿Estás seguro que quieres borrar esta queja?")) return;

    try {
      await FeedbackService.delete(id);
      setQuejas(quejas?.filter((queja) => queja.id !== id));
      toast.success("Queja borrada correctamente!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold dark:text-white">Lista de Quejas/Sugerencias</h2>
      <Link
        to="/feedback"
        className="text-white w-fit bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Añadir nueva queja
      </Link>

      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          value={titleQuery}
          onChange={handleSearchChange}
          placeholder="Buscar por título"
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quejas?.length === 0 && <p>No hay quejas registradas</p>}
      <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
        {quejas?.map((queja) => (
          <div key={queja.id}>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {queja.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{queja.description}</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  to={`/feedback/${queja.id}`}
                >
                  Ver
                </Link>
                <Link
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  to={`/feedback/edit/${queja.id}`}
                >
                  Editar
                </Link>
                <button
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={() => {
                    if (queja.id !== undefined) {
                      handleDelete(queja.id);
                    }
                  }}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuejaList;
