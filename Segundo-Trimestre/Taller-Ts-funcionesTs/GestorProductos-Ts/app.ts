/** Programa 3: Gestión de Productos

  * Descripción: Crea un programa que gestione productos de una tienda. El programa debe
    permitir agregar productos, buscar productos por nombre y calcular el valor total del inventario.

 */

    type Product = {
        name: string;
        price: number;
        quantity: number;
      };
      
      function managerProducts() {
        const products: Product[] = [];
      
        function add(name: string, price: number, quantity: number): void {
          products.push({ name, price, quantity });
        }
      
        function search(name: string): Product | undefined {
          return products.find(product => product.name === name);
        }
      
        function calculateTotalInventoryValue(): number {
          return products.reduce((total, product) => total + (product.price * product.quantity), 0);
        }
      
        return {
          add,
          search,
          calculateTotalInventoryValue,
        };
      }
      
      const productManager = managerProducts();
      productManager.add("Laptop", 1000, 5);
      productManager.add("Mouse", 50, 10);
      
      console.log(productManager.search("Laptop"));
      console.log(productManager.calculateTotalInventoryValue());
      