class Persona {
  private edad: number;
  private altura: number;
  private dni: string;

  constructor(edad: number, altura: number, dni: string) {
    this.edad = edad;
    this.altura = altura;
    this.dni = dni;
  }
}

class Alumno extends Persona {
  private matricula: string;

  constructor(edad: number, altura: number, dni: string, matricula: string) {
    super(edad, altura, dni);
    this.matricula = matricula;
  }
}

let persona1: Persona = new Persona(27, 1.69, "2121212");
let alumno: Alumno = new Alumno(27, 1.69, "2121212", "123");

persona1 = alumno;
alumno = persona1;

//shapes
//Cada uno de los tipos tiene una forma o estructura
//en que es representado, esto es mediante sus propiedades.
//Dentro de TypeScript si dos variables poseen propiedades idénticas
//aunque sean de distintas interfaces o clases, estas pueden ser asignadas entre sí.
