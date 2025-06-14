import { ChangeEvent, useEffect, useState } from "react";
import Offer from "../models/Offer";
import { OfferService } from "../services/offer.services";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaTrashAlt } from "react-icons/fa";

function OfferList() {
  const [offers, setOffers] = useState<Offer[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useSearchParams();
  const titleQuery = queryParams.get("title") || "";

  useEffect(() => {
    OfferService.search(titleQuery)
      .then(setOffers)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [titleQuery]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setQueryParams(newTitle ? { title: newTitle } : {});
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("¿Estás seguro que quieres borrar este pedido?")) return;

    try {
      await OfferService.delete(id);
      setOffers(offers?.filter((offer) => offer.id !== id));
      toast.success("Pedido borrado correctamente!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  const getTotalFromDescription = (desc: string | undefined): string => {
    if (!desc) return "0.00";
    const regex = /(\d+(\.\d+)?)\s*€/g;
    let match;
    let total = 0;
    while ((match = regex.exec(desc)) !== null) {
      total += parseFloat(match[1]);
    }
    return total.toFixed(2);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold dark:text-white">Lista de pedidos</h2>

      <div className="relative w-full max-w-md">
        <input
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          value={titleQuery}
          onChange={handleSearchChange}
          placeholder="Buscar por título"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z" />
          </svg>
        </div>
      </div>

      {loading && <p>Cargando pedidos...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {offers?.length === 0 && <p>No hay pedidos disponibles</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers?.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col justify-between h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{offer.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
                Total:{" "}
                <span className="font-bold text-red-700 dark:text-red-400">
                  {getTotalFromDescription(offer.description)} €
                </span>
              </p>

              <pre className="text-sm text-gray-700 whitespace-pre-line dark:text-gray-300">
                {offer.description}
              </pre>

              <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>
                  {offer.userCreator?.name} {offer.userCreator?.surname} ({offer.userCreator?.email})
                </span>
                <span className="text-xs">
                  {new Date(offer.published).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Link
                to={`/offers/${offer.id}`}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                <FaEye /> Ver
              </Link>
              <button
                aria-label="Borrar pedido"
                onClick={() => handleDelete(offer.id)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-900 cursor-pointer transition-colors focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
              >
                <FaTrashAlt /> Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferList;
