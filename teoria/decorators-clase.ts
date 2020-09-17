function init(target) {
  return class extends target {
    nombre = "Alan";
    apellido = "Buscaglia";

    sayMyName() {
      return `${this.name} ${this.apellido}`;
    }
  };
}
@init
class P {
  constructor() {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName());
