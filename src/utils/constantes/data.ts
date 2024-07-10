import { getNames } from 'country-list';

export const countries = getNames();
export const paises = countries.map((countryName) => ({
  label: countryName,
  value: countryName,
}));

export const masajista = [
  { label: "Masajista1", value: "1" },//cedula
  { label: "Masajista2", value: "2" },
  { label: "Masajista3", value: "3" }
];

export const rol = [
  { label: "Ciclista", value: "1" },
  { label: "Masajista", value: "2" },
  { label: "Director", value: "3" }
];

export const sexos = ["Masculino", "Femenino"];

export const etapas = [
  { label: "Montaña", value: "montaña" },
  { label: "llano con curvas", value: "llano con curvas" },
  { label: "semi llano", value: "semi llano" },
  { label: "llano recta", value: "llano recta" }
];

export const contexturas = [
  { label: "muy delgada", value: "muy delgada" },
  { label: "delgada", value: "delgada" },
  { label: "media", value: "media" },
  { label: "corpulenta", value: "corpulenta" },
  { label: "muy corpulenta", value: "muy corpulenta" }
]

export const especialidad = [
  { label: "Escaladores", value: "1", recomendar: "se recomienda contextura muy delgada" },
  { label: "Contrarelojistas", value: "6", recomendar: "se recomienda contextura delgada" },
  { label: "Gregarios", value: "4", recomendar: "se recomienda contextura media" },
  { label: "Clasicomanos", value: "5", recomendar: "se recomienda contextura media" },
  { label: "Rodadores", value: "2", recomendar: "se recomienda contextura corpulenta" },
  { label: "Sprinters", value: "3", recomendar: "se recomienda contextura muy corpulenta" },
];

export const img = [
  "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026302d",
  "",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
]


export const acciones2 = [
  { label: "Pedaleo", value: "1" }
];