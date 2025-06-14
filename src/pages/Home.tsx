import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  BebidaCard,
  bebidas,
  PizzaCard,
  pizzas,
} from "../components/PizzaCard";
import { useState } from "react";

function Home() {
  const { isAuthenticated } = useAuth();
  const [mostrar, setMostrar] = useState<"pizzas" | "bebidas">("pizzas");

  return (
    <div className="bg-black-100 dark:bg-black-900">
      {/* Header con fondo fijo */}
      <header
        className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-20 px-6 sm:px-10 rounded-b-3xl shadow-2xl max-w-[900px] mx-auto"
        style={{ minWidth: "900px" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-b-3xl bg-red-700 opacity-30 blur-xl filter"
        ></div>

        {/* Contenedor con animación solo para texto */}
        <div className="relative animate-fadeInUp text-white text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            La Frazione
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">
            Pizzas de masa artesana, preparadas al momento, o porciones por si te
            entra hambre 😉
          </p>
        </div>
      </header>

      {/* Contenido con animación */}
      <div className="animate-fadeInUp max-w-6xl mx-auto py-4 px-6 text-center">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Nuestra carta
          </h2>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setMostrar("pizzas")}
              className={`px-6 py-2 rounded font-semibold ${
                mostrar === "pizzas"
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              Pizzas
            </button>
            <button
              onClick={() => setMostrar("bebidas")}
              className={`px-6 py-2 rounded font-semibold ${
                mostrar === "bebidas"
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              Bebidas
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {mostrar === "pizzas" &&
              pizzas.map((pizza, index) => (
                <PizzaCard
                  key={index}
                  nombre={pizza.nombre}
                  descripcion={pizza.descripcion}
                  grupo={pizza.grupo}
                  imagen={pizza.imagen}
                />
              ))}

            {mostrar === "bebidas" &&
              bebidas.map((bebida, index) => (
                <BebidaCard
                  key={index}
                  nombre={bebida.nombre}
                  grupo={bebida.grupo}
                  imagen={bebida.imagen}
                />
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-16 mb-8">
            Nos ubicamos aqui
          </h2>
          <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Ubicación en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.7381926985633!2d-8.608398384550573!3d42.282444279192754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f087df2d74f43%3A0x58df68b278683885!2sR%C3%BAa%20Ribeira%2C%2022%2C%2036800%20Redondela%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1716040000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {!isAuthenticated && (
          <Link
            to="/register"
            className="mt-10 inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            ¡Regístrate Ahora!
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
