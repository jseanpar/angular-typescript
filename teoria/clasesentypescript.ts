class Transporte {
  private velocidad: number;
  private formaDeMovilidad: string;

  constructor(velocidad: number, formaDeMovilidad: string) {
    this.velocidad = velocidad;
    this.formaDeMovilidad = formaDeMovilidad;
  }

  getVelocidad() {
    return this.velocidad;
  }

  setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  getFormaDeMovilidad() {
    return this.formaDeMovilidad;
  }

  setFormaDeMovilidad(formaDeMovilidad: string) {
    this.formaDeMovilidad = formaDeMovilidad;
  }
}

const transporte: Transporte = new Transporte(20, "suelo");

class Auto extends Transporte {
  private cantidadDePuertas: number;

  constructor(velocidad: number, formaDeMovilidad: string, cantidadPuertas) {
    super(velocidad, formaDeMovilidad);
    this.cantidadDePuertas = cantidadPuertas;
  }

  getVelocidad() {
    return super.getVelocidad() + 10;
  }

  getCantidadDePuertas() {
    return this.getCantidadDePuertas;
  }

  setCantidadDePuertas(cantidadDePuertas: number) {
    this.cantidadDePuertas = cantidadDePuertas;
  }
}

const auto: Auto = new Auto(20, "suelo", 4);
