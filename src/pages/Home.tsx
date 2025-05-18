import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { PizzaCard, pizzas } from '../components/PizzaCard';

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-black-100 dark:bg-black-900">
      <header className="bg-red-600 dark:bg-red-800 text-white text-center py-16 px-4 sm:px-6 rounded">
        <h1 className="text-4xl sm:text-5xl font-extrabold">La Frazione</h1>
        <p className="mt-4 text-base sm:text-lg">
          Pizzas de masa artesana, preparadas al momento, o porciones por si te entra hambre ;)
        </p>
      </header>

      <section className="max-w-6xl mx-auto py-4 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Nuestra carta
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {pizzas.map((pizza: { nombre: string; descripcion: string }, index: number) => (
            <PizzaCard key={index} nombre={pizza.nombre} descripcion={pizza.descripcion} />
          ))}
        </div>

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
        ></iframe>
      </div>

        {!isAuthenticated && (
          <Link
            to="/register"
            className="mt-10 inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            ¡Regístrate Ahora!
          </Link>
        )}
      </section>
    </div>
  );
}

export default Home;
