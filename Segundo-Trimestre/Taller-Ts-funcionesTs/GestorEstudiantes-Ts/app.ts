/** Programa 4: Gestión de Estudiantes

  * Descripción: Crea un programa que gestione estudiantes de una escuela. El programa debe
    permitir agregar estudiantes, buscar estudiantes por nombre y calcular el promedio de notas de todos los estudiantes.

 */

    type Student = {
        name: string;
        grades: number[];
      };
      
      function managerStudents() {
        const students: Student[] = [];
      
        function add(name: string, grades: number[]): void {
          students.push({ name, grades });
        }
      
        function search(name: string): Student | undefined {
          return students.find(student => student.name === name);
        }
      
        function calcGrade(): number {
          const totalGrades = students.reduce((total, student) => {
            const studentAverage = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
            return total + studentAverage;
          }, 0);
          return students.length > 0 ? totalGrades / students.length : 0;
        }
      
        return {
          add,
          search,
          calcGrade,
        };
      }
      
      const studentManager = managerStudents();
      studentManager.add("John", [85, 90, 78]);
      studentManager.add("Jane", [92, 88, 79]);
      
      console.log(studentManager.search("John"));
      console.log(studentManager.calcGrade());
      