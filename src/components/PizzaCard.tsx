export const pizzas = [
    { nombre: "La York", descripcion: "Tomate, mozzarella y jamón york" },
    { nombre: "La Margarita", descripcion: "Tomate, queso y mozzarella." },
    { nombre: "La Perrito", descripcion: "Tomate, mozzarella y salchicha" },
    { nombre: "La Hawaiiana", descripcion: "Tomate, mozzarella, jamón york y piña" },
    { nombre: "La Pollito", descripcion: "Tomate, mozzarella, pollo y bacon" },
    { nombre: "La York Bacona", descripcion: "Tomate, mozzarella, jamón york y bacon" },
    { nombre: "La Olivatun", descripcion: "Tomate, mozzarella, atún y aceitunas verdes" },
    { nombre: "La Pepperoni", descripcion: "Tomate, mozzarella y pepperoni" },
    { nombre: "La Cuatro Quesos", descripcion: "Tomate, mozzarella y mezcla de 4 quesos" },
    { nombre: "La Nutella", descripcion: "mozzarella, nutella y lacasitos" },
    { nombre: "La Huerta", descripcion: "Tomate, mozzarella, pimiento rojo y verde, calabacín, berenjena, champiñones y maíz dulce" },
    { nombre: "La Mediterranea", descripcion: "Tomate, mozzarella, jamón york, champiñones tomate en rodajas, cebolla y pimienta negra" },
    { nombre: "La Anchoatún", descripcion: "Tomate, mozzarella, atún y anchoas" },
    { nombre: "La Española", descripcion: "Tomate, mozzarella, jamón serrano, tomate en rodajas y aceite de oliva" },
    { nombre: "La Lacon con Grelos", descripcion: "Tomate, mozzarella, grelos, lacón, chorizo, pimentón dulce, picante y aceite de oliva" },
    { nombre: "La Mexicana", descripcion: "Tomate, mozzarella, carne de ternera, pimiento rojo, verde, y salsa picante" },
    { nombre: "La Barbacoa", descripcion: "Tomate, mozzarella, carne de ternera, bacon, y salsa barbacoa" },
    { nombre: "La Ruliña", descripcion: "Base de queso crema, mozarella, rulo de cabra, cebolla caramelizada" },
    { nombre: "La Gallega", descripcion: "Tomate, mozzarella, queso tetilla, pulpo, pimenton dulce, picante y aceite de oliva" },
    { nombre: "La Cuatro Estaciones", descripcion: "Tomate, mozzarella, jamón york, pepperoni, champiñones y aceitunas verdes" },
    { nombre: "La Caprichosa", descripcion: "Tomate, mozzarella, york, bacon, champiñones, atún y cebolla" },
    { nombre: "La Carbonara", descripcion: "Nata, mozzarella, bacon, champiñones, cebolla, y pimienta negra" },
    { nombre: "La Campera", descripcion: "Tomate, mozzarella, carne de ternera, pollo, bacon y huevo" },
    { nombre: "La Tita", descripcion: "Tomate, mozzarella, jamón york, champiñones, pollo, cebolla y rulo de cabra" },
  ];
  
  export function PizzaCard({ nombre, descripcion }: { nombre: string; descripcion: string }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{nombre}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{descripcion}</p>
      </div>
    );
  }
  