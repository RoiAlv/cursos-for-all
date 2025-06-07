// pizzas.tsx

import cocacola from "../assets/cocacola.png";

import york from "../assets/york.jpeg";
import hawaiana from "../assets/hawaiana.jpeg";
import pollito from "../assets/pollito.jpeg";
import olivatun from "../assets/olivatun.jpeg";
import peperoni from "../assets/peperoni.jpeg";
import cuatroQuesos from "../assets/4quesos.jpeg";
import huerta from "../assets/huerta.jpeg";
import mediterranea from "../assets/mediterranea.jpeg";
import laconGrelos from "../assets/lacon_grelos.jpeg";
import mexicana from "../assets/mexicana.jpeg";
import barbacoa from "../assets/barbacoa.jpeg";
import rulina from "../assets/ruliña.jpeg";
import gallega from "../assets/gallega.jpeg";
import cuatroEstaciones from "../assets/cuatro estaciones.jpeg";
import carbonara from "../assets/carbonara.jpeg";

import zero from "../assets/zero.webp";
import nestea from "../assets/nestea.webp";
import kaslimon from "../assets/kaslimon.png";
import kasnaranja from "../assets/kasnaranja.png";
import aquariuslimon from "../assets/aquariuslimon.webp";
import aquariusnaranja from "../assets/aquariusnaranja.png";
import agua from "../assets/agua.png";
import mahou from "../assets/mahou.webp";
import estrella from "../assets/estrella.png";



export const pizzas = [
  { nombre: "La York", descripcion: "Tomate, mozzarella y jamón york", grupo: "A", imagen: york },
  { nombre: "La Margarita", descripcion: "Tomate, queso y mozzarella.", grupo: "A", imagen: "" },
  { nombre: "La Perrito", descripcion: "Tomate, mozzarella y salchicha", grupo: "A", imagen: "" },
  { nombre: "La Hawaiiana", descripcion: "Tomate, mozzarella, jamón york y piña", grupo: "B", imagen: hawaiana },
  { nombre: "La Pollito", descripcion: "Tomate, mozzarella, pollo y bacon", grupo: "B", imagen: pollito },
  { nombre: "La York Bacona", descripcion: "Tomate, mozzarella, jamón york y bacon", grupo: "B", imagen: "" },
  { nombre: "La Olivatun", descripcion: "Tomate, mozzarella, atún y aceitunas verdes", grupo: "B", imagen: olivatun },
  { nombre: "La Pepperoni", descripcion: "Tomate, mozzarella y pepperoni", grupo: "B", imagen: peperoni },
  { nombre: "La Cuatro Quesos", descripcion: "Tomate, mozzarella y mezcla de 4 quesos", grupo: "B", imagen: cuatroQuesos },
  { nombre: "La Nutella", descripcion: "mozzarella, nutella y lacasitos", grupo: "B", imagen: "" },
  { nombre: "La Huerta", descripcion: "Tomate, mozzarella, pimiento rojo y verde, calabacín, berenjena, champiñones y maíz dulce", grupo: "C", imagen: huerta },
  { nombre: "La Mediterranea", descripcion: "Tomate, mozzarella, jamón york, champiñones tomate en rodajas, cebolla y pimienta negra", grupo: "C", imagen: mediterranea },
  { nombre: "La Anchoatún", descripcion: "Tomate, mozzarella, atún y anchoas", grupo: "C", imagen: "" },
  { nombre: "La Española", descripcion: "Tomate, mozzarella, jamón serrano, tomate en rodajas y aceite de oliva", grupo: "C", imagen: "" },
  { nombre: "La Lacon con Grelos", descripcion: "Tomate, mozzarella, grelos, lacón, chorizo, pimentón dulce, picante y aceite de oliva", grupo: "C", imagen: laconGrelos },
  { nombre: "La Mexicana", descripcion: "Tomate, mozzarella, carne de ternera, pimiento rojo, verde, y salsa picante", grupo: "C", imagen: mexicana },
  { nombre: "La Barbacoa", descripcion: "Tomate, mozzarella, carne de ternera, bacon, y salsa barbacoa", grupo: "C", imagen: barbacoa },
  { nombre: "La Ruliña", descripcion: "Base de queso crema, mozarella, rulo de cabra, cebolla caramelizada", grupo: "C", imagen: rulina },
  { nombre: "La Gallega", descripcion: "Tomate, mozzarella, queso tetilla, pulpo, pimenton dulce, picante y aceite de oliva", grupo: "D", imagen: gallega },
  { nombre: "La Cuatro Estaciones", descripcion: "Tomate, mozzarella, jamón york, pepperoni, champiñones y aceitunas verdes", grupo: "D", imagen: cuatroEstaciones },
  { nombre: "La Caprichosa", descripcion: "Tomate, mozzarella, york, bacon, champiñones, atún y cebolla", grupo: "D", imagen: "" },
  { nombre: "La Carbonara", descripcion: "Nata, mozzarella, bacon, champiñones, cebolla, y pimienta negra", grupo: "D", imagen: carbonara },
  { nombre: "La Campera", descripcion: "Tomate, mozzarella, carne de ternera, pollo, bacon y huevo", grupo: "D", imagen: "" },
  { nombre: "La Tita", descripcion: "Tomate, mozzarella, jamón york, champiñones, pollo, cebolla y rulo de cabra", grupo: "D", imagen: "" },
];

export const bebidas = [
  { nombre: "Coca-Cola", grupo: "A", imagen: cocacola },
  { nombre: "Coca-Cola zero", grupo: "A", imagen: zero },
  { nombre: "Nestea", grupo: "A", imagen: nestea },
  { nombre: "Kas Limón", grupo: "B", imagen: kaslimon },
  { nombre: "Kas Naranja", grupo: "B", imagen: kasnaranja },
  { nombre: "Aquarius Limón", grupo: "B", imagen: aquariuslimon },
  { nombre: "Aquarius Naranja", grupo: "B", imagen: aquariusnaranja },
  { nombre: "Agua", grupo: "B", imagen: agua },
  { nombre: "Mahou", grupo: "B", imagen: mahou },
  { nombre: "Estrella galicia", grupo: "B", imagen: estrella },
];

export const precios = {
  A: { fraccion: '1,20€', mediana: '7,50€', familiar: '9€' },
  B: { fraccion: '1,50€', mediana: '11€', familiar: '14€' },
  C: { fraccion: '2€', mediana: '12€', familiar: '15€' },
  D: { fraccion: '2€', mediana: '13€', familiar: '16€' },
};

export function PizzaCard({
  nombre,
  descripcion,
  grupo,
  imagen,
}: {
  nombre: string;
  descripcion: string;
  grupo: string;
  imagen: string;
}) {
  const precio = precios[grupo as keyof typeof precios] ?? {
    fraccion: '—',
    mediana: '—',
    familiar: '—',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col justify-between">
      <div>
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{nombre}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{descripcion}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Fracción: {precio.fraccion}
        </button>
        <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
          Mediana: {precio.mediana}
        </button>
        <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Familiar: {precio.familiar}
        </button>
      </div>
    </div>
  );
}

export function PizzasGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.nombre}
          nombre={pizza.nombre}
          descripcion={pizza.descripcion}
          grupo={pizza.grupo}
          imagen={pizza.imagen}
        />
      ))}
    </div>
  );
}

export function BebidaCard({
  nombre,
  grupo,
  imagen,
}: {
  nombre: string;
  grupo: string;
  imagen: string;
}) {
  const precio = precios[grupo as keyof typeof precios] ?? {
    fraccion: '—',
    mediana: '—',
    familiar: '—',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col justify-between">
      <div>
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{nombre}</h3>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          {precio.fraccion}
        </button>
      </div>
    </div>
  );
}