/*
cadenas de texto
*/

var cadena = 'cadena de texto'
console.log(cadena.length)
cadena = new String ('nueva cadena')
console.log(cadena)
let loren = '    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';

console.log(loren,
    loren.trim,
    loren.split);
console.log(loren.trim());
console.log(loren.split(','));
console.log(loren.split("."));