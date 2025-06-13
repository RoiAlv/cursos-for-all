import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OfferService } from "../services/offer.services";
import Offer from "../models/Offer";

function OfferDetail() {
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    OfferService.getById(Number(id))
      .then(setOffer)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="text-center text-white mt-10">Cargando...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  if (!offer)
    return (
      <div className="text-white text-center mt-10">Pedido no encontrado</div>
    );

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-4xl font-bold">{offer.title}</h1>

      {offer.description && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Detalles del pedido:</h2>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            {offer.description
              .split(/\d+\.\s/)
              .filter((item) => item.trim().length > 0)
              .map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
          </ol>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Activo:</p>
          <p>{offer.active ? "Sí" : "No"}</p>
        </div>

        <div>
          <p className="font-semibold">Fecha publicación:</p>
          <p>{new Date(offer.published).toLocaleString()}</p>
        </div>

        <div>
          <p className="font-semibold">Fecha finalización:</p>
          <p>{new Date(offer.expired).toLocaleString()}</p>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-6">
        <h2 className="text-xl font-semibold mb-2">Pedido a nombre de:</h2>
        <p className="text-gray-300">
          {offer.userCreator?.name} {offer.userCreator?.surname}
        </p>
        <p className="text-gray-400">{offer.userCreator?.email}</p>
      </div>

      {offer.location && (
        <div className="pt-6">
          <h2 className="text-xl font-semibold mb-2">Localización</h2>
          <iframe
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-md border-2 border-gray-600"
            src={`https://www.google.com/maps?q=${offer.location}&output=embed`}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default OfferDetail;
