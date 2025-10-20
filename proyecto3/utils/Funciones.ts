export const generarListaIdsEstrellas = (numero: number) => {
  return Array.from({ length: numero }, (_, i) => i + 1);
};
