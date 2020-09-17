//decorator
function logProperty(target, key) {
  const _val = this[key];
  const getter = () => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  const setter = (newValue) => {
    console.log(`Set: ${key} => ${newValue}`);
    _val = newValue;
  };

  const objectProperty = {
    get: getter,
    set: setter,
  };

  Object.defineProperties(target, key, objectProperty);
}

class PersonaA {
  @logProperty
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new PersonaA("Alan");
p.name = "platzi"; //Set : name => 'platzi'
const nameFromClass = p.sayMyName; //Get : name => 'platzi'
