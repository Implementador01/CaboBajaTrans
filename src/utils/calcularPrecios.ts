// Definir las zonas válidas
export type Zona = "zona1" | "zona2" | "zona3" | "zona4" | "zona5" | "especial"; // Incluimos "especial" como una zona

// Ajustar la interfaz para que use el tipo de zona válido
interface PrecioParams {
  camioneta: string;
  zona: Zona; // La zona será uno de los valores: "zona1", "zona2", "zona3", "zona4", "zona5" o "especial"
  destino: string; // Para identificar si es un destino con precio especial
}

// Mapeo de precios por zona para cada tipo de camioneta
const preciosPorZona: { [key in Zona]?: { [key: string]: number } } = {
  zona1: {
    "SUV (1-5 PAX)": 70,
    "VAN 1-10": 75,
    "ESCALADE 1-5": 100,
    "JAC 1-14": 100,
    "SPRINTER 1-19": 160,
  },
  zona2: {
    "SUV (1-5 PAX)": 75,
    "VAN 1-10": 80,
    "ESCALADE 1-5": 100,
    "JAC 1-14": 100,
    "SPRINTER 1-19": 180,
  },
  zona3: {
    "SUV (1-5 PAX)": 85,
    "VAN 1-10": 90,
    "ESCALADE 1-5": 120,
    "JAC 1-14": 110,
    "SPRINTER 1-19": 200,
  },
  zona4: {
    "SUV (1-5 PAX)": 100,
    "VAN 1-10": 105,
    "ESCALADE 1-5": 120,
    "JAC 1-14": 110,
    "SPRINTER 1-19": 210,
  },
  zona5: {
    "SUV (1-5 PAX)": 100,
    "VAN 1-10": 105,
    "ESCALADE 1-5": 120,
    "JAC 1-14": 110,
    "SPRINTER 1-19": 210,
  },
};

// Mapeo de precios especiales
const preciosEspeciales: { [direccion: string]: number } = {
  "Agave Hotel and Cantina, Buena Vista": 230,
  "Rancho Pescadero": 280,
  "Baja Surf Casitas": 300,
  "El Cardonal Golf Course": 300,
  "Santorini Palace, El Pescadero": 280,
  "Tequila Ranch": 280,
};

// Función para calcular el precio con base en la camioneta, zona y destino seleccionado
export const calcularPrecio = ({ camioneta, zona, destino }: PrecioParams): number => {
  // Verificar si el destino tiene un precio especial
  if (preciosEspeciales[destino]) {
    return preciosEspeciales[destino];
  }

  // Obtener el precio basado en la camioneta y la zona
  const precioBase = preciosPorZona[zona]?.[camioneta] || 0;

  return precioBase;
};
