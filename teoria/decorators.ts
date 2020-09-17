//target : PersonaX, key : sayMyName
function log(target, key) {
  console.log(key + "se ha llamado");
}

class PersonaX {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  @log
  sayMyName() {
    console.log(this.name);
  }
}

const person: PersonaX = new PersonaX("Alan");

person.sayMyName(); // 'Alan'
