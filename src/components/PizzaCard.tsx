export const pizzas = [
  { nombre: "La York", descripcion: "Tomate, mozzarella y jamón york", grupo: "A" },
  { nombre: "La Margarita", descripcion: "Tomate, queso y mozzarella.", grupo: "A"},
  { nombre: "La Perrito", descripcion: "Tomate, mozzarella y salchicha", grupo: "A"},
  { nombre: "La Hawaiiana", descripcion: "Tomate, mozzarella, jamón york y piña", grupo: "B"},
  { nombre: "La Pollito", descripcion: "Tomate, mozzarella, pollo y bacon", grupo: "B"},
  { nombre: "La York Bacona", descripcion: "Tomate, mozzarella, jamón york y bacon", grupo: "B"},
  { nombre: "La Olivatun", descripcion: "Tomate, mozzarella, atún y aceitunas verdes", grupo: "B"},
  { nombre: "La Pepperoni", descripcion: "Tomate, mozzarella y pepperoni", grupo: "B"},
  { nombre: "La Cuatro Quesos", descripcion: "Tomate, mozzarella y mezcla de 4 quesos", grupo: "B"},
  { nombre: "La Nutella", descripcion: "mozzarella, nutella y lacasitos", grupo: "B"},
  { nombre: "La Huerta", descripcion: "Tomate, mozzarella, pimiento rojo y verde, calabacín, berenjena, champiñones y maíz dulce", grupo: "C"},
  { nombre: "La Mediterranea", descripcion: "Tomate, mozzarella, jamón york, champiñones tomate en rodajas, cebolla y pimienta negra", grupo: "C"},
  { nombre: "La Anchoatún", descripcion: "Tomate, mozzarella, atún y anchoas", grupo: "C"},
  { nombre: "La Española", descripcion: "Tomate, mozzarella, jamón serrano, tomate en rodajas y aceite de oliva", grupo: "C"},
  { nombre: "La Lacon con Grelos", descripcion: "Tomate, mozzarella, grelos, lacón, chorizo, pimentón dulce, picante y aceite de oliva" ,grupo: "C"},
  { nombre: "La Mexicana", descripcion: "Tomate, mozzarella, carne de ternera, pimiento rojo, verde, y salsa picante", grupo: "C"},
  { nombre: "La Barbacoa", descripcion: "Tomate, mozzarella, carne de ternera, bacon, y salsa barbacoa", grupo: "C"},
  { nombre: "La Ruliña", descripcion: "Base de queso crema, mozarella, rulo de cabra, cebolla caramelizada", grupo: "C"},
  { nombre: "La Gallega", descripcion: "Tomate, mozzarella, queso tetilla, pulpo, pimenton dulce, picante y aceite de oliva", grupo: "D"},
  { nombre: "La Cuatro Estaciones", descripcion: "Tomate, mozzarella, jamón york, pepperoni, champiñones y aceitunas verdes", grupo: "D"},
  { nombre: "La Caprichosa", descripcion: "Tomate, mozzarella, york, bacon, champiñones, atún y cebolla", grupo: "D"},
  { nombre: "La Carbonara", descripcion: "Nata, mozzarella, bacon, champiñones, cebolla, y pimienta negra", grupo: "D"},
  { nombre: "La Campera", descripcion: "Tomate, mozzarella, carne de ternera, pollo, bacon y huevo", grupo: "D"},
  { nombre: "La Tita", descripcion: "Tomate, mozzarella, jamón york, champiñones, pollo, cebolla y rulo de cabra", grupo: "D"},
];

export const precios = {
  A: { fraccion: '1,20€', mediana: '7,50€', familiar: '9€' },
  B: { fraccion: '1,50€', mediana: '11€', familiar:  '14€'},
  C: { fraccion: '2€', mediana: '12€', familiar: '15€' },
  D: { fraccion: '2€', mediana: '13€', familiar: '16€'},
};

export function PizzaCard({ nombre, descripcion, grupo }: { nombre: string; descripcion: string; grupo: string}) {
  const precio = precios[grupo as keyof typeof precios] ?? {
    fraccion: '—',
    mediana: '—',
    familiar: '—',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col justify-between">
      <div>
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
