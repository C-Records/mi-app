export interface NumismaticaItem {
  id: number;
  nombre: string;
  ano: number;
  material: string;
  denominacion: string;
  precio: number;
  imagen: string;
  desmonetizado?: boolean;
}

export const numismaticaData: NumismaticaItem[] = [
  { id: 1, nombre: "Billete 500 Córdobas", ano: 1945, material: "Papel algodón", denominacion: "500 C$", precio: 8058, imagen: "/billete-500.jpg" },
  { id: 2, nombre: "Billete 1000 Córdobas", ano: 1972, material: "Papel algodón", denominacion: "1000 C$", precio: 1008, imagen: "/billete-1000.jpg" },
  { id: 3, nombre: "Moneda Plata 50 C$", ano: 2020, material: "Plata 999", denominacion: "50 C$", precio: 1500, imagen: "/moneda-plata.jpg" },
  // Añade más datos reales de BCN...
];