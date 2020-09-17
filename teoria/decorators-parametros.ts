function logParameter(target, propertyName, index) {
  const metadatakey = `log_${propertyName}_parameters`;
  if (Array.isArray(target[metadatakey])) {
    target[metadatakey].push(index);
  } else {
    target[metadatakey] = [index];
  }
}

class Params {
  greet(@logParameter message: string): string {
    return message;
  }
}

const p = new Params();
p.greet("hola");
