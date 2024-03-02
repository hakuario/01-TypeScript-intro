export const name ='Carlitos';
export let fullname ='Carlitos';
export const age: number = 32;
export const isValid: boolean = true;
// console.log(name);

export const templateString = `Ejemplo
 de 
 multilinea 
 que puede tener " dobles
 ' simple
 inyectar valores ${name}
 expresiones ${1+1}
 numeros ${age}
 boleanos ${isValid}`;

 console.log(templateString);
 