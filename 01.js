const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if(!this.head) return false;
  let current = this.head;
  let a = this.head;
  while(a){
    while(current){
      if(current.next !== null && current.value < current.next.value){
        let aux = current.value;
        current.value = current.next.value;
        current.next.value = aux;
      }
      current = current.next;
    }
    a = a.next;
    current = this.head
  }
};

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};