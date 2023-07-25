export * from "./AddCategory"; // exporta todo lo que haya en /AddCategory
export * from "./GifGrid";
export * from "./GifItem";

//* esto se le suelve llamar archivo de barril y me permite agrupar las importaciones de por ejemplo los componentes, igual que se importa un useState y un useEffect desde una misma importación y ruta

//^ de esta manera agrupo todo al index y cuando importe los componentes lo puedo hacer directamente desde la ruta /components sin necesidad de hacer referencia a el archivo index ya que es redundante y lo señala de manera implicita

//? es recomendable hacer esto cuando hay varios archivos en una carpeta donde se están exportando funciones o componentes
