/** Programa 2: Gestión de Empleados

  * Descripción: Crea un programa que gestione empleados de una empresa. El programa debe
    permitir agregar empleados, buscar empleados por nombre y calcular el salario promedio.

 */

    type Employee = {
        name: string;
        salary: number;
      };
      
      function managerEmployees() {
        const employees: Employee[] = [];
      
        function add(name: string, salary: number): void {
          employees.push({ name, salary });
        }
      
        function search(name: string): Employee | undefined {
          return employees.find(employee => employee.name === name);
        }
      
        function calcSalary(): number {
            // Usamos el método reduce para calcular la suma total de los salarios de todos los empleados
            const totalSalaries = employees.reduce((total, employee) => {
                // En cada iteración, sumamos el salario del empleado al acumulador total
                return total + employee.salary;
            }, 0); // El valor inicial de total es 0
        
            // Si hay empleados en el arreglo, calculamos el promedio dividiendo la suma total por la cantidad de empleados
            // Si no hay empleados (longitud del arreglo es 0), devolvemos 0 para evitar la división por 0
            return employees.length > 0 ? totalSalaries / employees.length : 0;
        }
        
      
        return {
          add,
          search,
          calcSalary,
        };
      }
      
      const employeeManager = managerEmployees();
      employeeManager.add("Miguel", 3000);
      employeeManager.add("Pablo", 4000);
      
      console.log(employeeManager.search("Miguel"));
      console.log(employeeManager.calcSalary());
      