/*const listaMercado = ["pan","carne","lechuga","tomate","huevo","tocino"];

listaMercado[5] = "cheddar";


const qa = [['¿Cuál es la capital de Bolivia', 'Sucre'],['¿Cuántos millones de bolivianos hay?', 11], ['¿Cuál es la moneda de Bolivia?', 'Bolivianos']];

// Metodos en Arrays

const students = ["Claudia", "Deya", "Helba", "Maribel Chura", "Maribel Salinas", "Alisson", "Rocio"];
students.push("Silvia");



const numbers = [1,2,3,4,5];
numbers.push(6); //Agrega un nuevo valor a mi array
numbers.pop(); //Elimina el ultimo valor de mi array
numbers.unshift(0); //Agrega como primer valor dentro de mi array
numbers.shift(); //Elimina el primer valor dentro de mi array
console.log(numbers.slice(2,5));
console.log(students.splice(2,3));
console.log(students);

let new_list = numbers.concat(students);

console.log(new_list);


console.log(numbers);

*/

//Estructura de datos: Pila

class Pila{
    //Creamos un constructor
    constructor(){
        this.pila = [];
    }

    //Definición del metodo "para agregar" elementos a la pila
    push(elemento){
        this.pila.push(elemento);
        return this.pila;
    }

    //Definir metodo pop "para eliminar" elementos de la pila
    pop() {
        return this.pila.pop();
    }

    //Define el ultimo valor agregado a la pila, "sin sacarlo"
    peek(){
        return this.pila[this.pila.length - 1];
    }

    //Define la longitud de mis elementos
    size(){
        return this.pila.length;
    }

    //Mostrar el contenido de la pila
    print(){
        console.log(this.pila);
    }
}

const pila = new Pila();

console.log(pila.size());
console.log(pila.push('Teresa'));
console.log(pila.push('Rocio'));
console.log(pila.push('Silvia'));
console.log(pila.push('Pepito'));
pila.pop();
pila.print();
console.log(pila.peek());

//Estructura de datos: Cola

class Cola{

    //Creamos el constructor
    constructor(){
        this.cola = [];
    }

    //Definimos el metodo para agregar elementos
    enqueue(elemento){
        this.cola.push(elemento);
        return this.cola;
    }

    //Creamos un metodo para eliminar el primer elemento de la cola
    dequeue(){
        return this.cola.shift();
    }

    //Definimos un metodo para observar el primer elemento de nuestra cola
    peek(){
        return this.cola[0];
    }

    //Define de un metodo para observar los elementos almacenados
    size(){
        return this.cola.length;
    }

    //Creamos un metodo para observar si hay elementos en la cola
    isEmpty(){
        return this.cola.length === 0;
    }

    //Imprime nuestro array
    print(){
        return console.log(this.cola);
    }
}

const cola = new Cola();

console.log(cola.enqueue('Pepito'));
console.log(cola.enqueue('Deya'));
console.log(cola.enqueue('Alisson'));
console.log(cola.enqueue('Maribel S.'));
console.log(cola.enqueue('Maribel C.'));
cola.dequeue();
console.log(cola.size());
cola.print();


//
