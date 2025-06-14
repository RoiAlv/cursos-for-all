// src/pages/Cart.tsx
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { OfferService } from "../services/offer.services";
import toast from "react-hot-toast";

function Cart() {
  const { items, removeItem, clearCart } = useCart();
  const [sending, setSending] = useState(false);

  const total = items.reduce((acc, item) => acc + item.precio, 0).toFixed(2);

  const handleFinalizeOrder = async () => {
    if (items.length === 0) return;

    setSending(true);

    const title = `Pedido de ${items.length} producto${items.length > 1 ? "s" : ""}`;
    const description = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.nombre} - ${item.tipo} - ${item.tamaño ?? "Única"} - ${item.precio.toFixed(2)} €`
      )
      .join("\n");

    const today = new Date().toISOString();
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const newOffer = {
      title,
      description,
      active: true,
      published: today,
      expired: nextWeek,
      idCategory: null,
    };

    try {
      await OfferService.create(newOffer);
      clearCart();
      toast.success("Pedido enviado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar el pedido");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold dark:text-white">Tu carrito</h2>

      {items.length === 0 && <p className="text-lg">El carrito está vacío.</p>}

      {items.length > 0 && (
        <>
          <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.nombre}
                </h5>
                <p className="text-gray-700 dark:text-gray-400">Tipo: {item.tipo}</p>
                {item.tamaño && (
                  <p className="text-gray-700 dark:text-gray-400">Tamaño: {item.tamaño}</p>
                )}
                <p className="text-gray-700 dark:text-gray-400">
                  Precio: {item.precio.toFixed(2)} €
                </p>

                <button
                  className="mt-2 w-full px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
                  onClick={() => removeItem(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Aviso importante */}
          <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-400 rounded-md max-w-xl mx-auto">
            <strong>Importante:</strong> Todos los pedidos serán pagados en el local.
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-lg font-semibold dark:text-white">Total: {total} €</p>
            <button
              className="px-5 py-2 text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
            <button
              disabled={sending}
              onClick={handleFinalizeOrder}
              className="px-5 py-2 text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
            >
              {sending ? "Enviando..." : "Finalizar pedido"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
