/** Programa 1: Gestión de una Biblioteca
 
  * Descripción: Crea un programa que gestione una biblioteca. El programa debe
    permitir agregar libros, buscar libros por título y mostrar todos los libros
    disponibles.

    Para gestionar libros debemos de tener libros con propiedades. 

    luego crear una función que gestione libros. Primera función.

    este gestor nos debe permitir agregar libros (función). Segunda función. (para agrar libros debemos de tener un lugar donde gusrdarlos en este caso es un array "library")

    El gestor debe permitir buscar libros por título (función). Tercera función.

    El gestor debe permitir mostrar todos los libros disponibles (función). Cuarta función.

 */

// Define el tipo Book con las propiedades title (string) y author (string)
type Book = {
  title: string;
  author: string;
};

// Función que encapsula las funciones de gestión de libros
function managerLibrary() {
  // Array para almacenar los libros en la biblioteca
  const library: Book[] = [];

  // Función para agregar un libro a la biblioteca
  function add(title: string, author: string): void {
      library.push({ title, author });
  }

  // Función para buscar un libro en la biblioteca por título
  function search(title: string): Book | undefined {
      return library.find(book => book.title === title);
  }

  // Función para mostrar todos los libros disponibles en la biblioteca
  function show(): Book[] {
      return [...library];
  }

  // Devuelve las funciones para gestionar los libros
  return {
      add,
      search,
      show
  };
}

// Crear una instancia de la función managerLibrary
const library = managerLibrary();

// Uso de las funciones
library.add("El Quijote", "Miguel de Cervantes");
library.add("Cien Años de Soledad", "Gabriel García Márquez");

console.log(library.search("El Quijote")); // Muestra el libro "El Quijote"
console.log(library.show()); // Muestra todos los libros en la biblioteca
