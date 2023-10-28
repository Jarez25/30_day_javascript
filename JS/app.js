alert('esta es una alerta js')
var saludo_por_consola =  'este es un saludo desde la console'
console.log('hola mundo')
console.log(saludo_por_consola)
document.write(saludo_por_consola)
console.log(window)
document.write(window)
var musica = 'rock'
console.log('el genero de la musica antes del bloque  es ', musica);
{
    musica =  'pop'
    console.log('el valor de la musica dentro del bloque es',musica);
}

console.log('el valor de musica despues del bloque es', musica);
console.log('*********************************************');
let musica2 = 'rock'
console.log('el genero de la musica antes del bloque  es ', musica2);
{
    let musica2 =  'pop'
    console.log('el valor de la musica dentro del bloque es',musica2);
}

console.log('el valor de musica despues del bloque es', musica2);