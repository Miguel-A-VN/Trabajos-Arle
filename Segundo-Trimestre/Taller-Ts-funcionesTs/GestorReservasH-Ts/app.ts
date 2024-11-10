/** Programa 5: Gestión de Reservas de Hotel

  * Descripción: Crea un programa que gestione las reservas de un hotel. El programa debe
    permitir agregar reservas, buscar reservas por nombre del huésped y calcular el ingreso total del hotel.

 */

    type Reservation = {
        guestName: string;
        amount: number;
      };
      
      function managerReservations() {
        const reservations: Reservation[] = [];
      
        function add(guestName: string, amount: number): void {
          reservations.push({ guestName, amount });
        }
      
        function search(guestName: string): Reservation | undefined {
          return reservations.find(reservation => reservation.guestName === guestName);
        }
      
        function calcIncome(): number {
          return reservations.reduce((total, reservation) => total + reservation.amount, 0);
        }
      
        return {
          add,
          search,
          calcIncome,
        };
      }
      
      const resMngr = managerReservations();
      resMngr.add("Carlos", 150);
      resMngr.add("Ana", 200);
      
      console.log(resMngr.search("Carlos"));
      console.log(resMngr.calcIncome());
      