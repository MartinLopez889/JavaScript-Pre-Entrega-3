// Lista de alumnos (presentes y ausentes)

// Creo una lista de alumnos con el grado al que pertenecen y si asistieron o no. Esa lista, la muestro por tabla.
const lista =[
    {nombre: "martin", grado: "1A", estado: "presente"},
    {nombre: "sofia", grado: "1A", estado: "ausente"},
    {nombre: "lucas", grado: "1B", estado: "ausente"},
    {nombre: "mariana", grado: "1B", estado: "presente"},
    {nombre: "ignacio", grado: "1A", estado: "presente"},
    {nombre: "lujan", grado: "1B",  estado: "presente"},
]
console.table(lista)

//Luego creo un console log donde pueda ver la lista, pero en forma de texto (oración).
for(let i=0; i < lista.length; i++){
    console.log(lista[i].nombre + " del grado " + lista[i].grado + " se encuentra " + lista[i].estado)
}

// Agrego nuevos alumnos a la lista
lista.push(
    {nombre: "estefania", grado: "1A",  estado: "ausente"},
    {nombre: "jose luis", grado: "1B",  estado: "presente"}
)
console.table(lista)

//Ahora creo un filtro a través de una función, para buscar cuáles son los alumnos que están Presentes o Ausentes.
let filtro = lista
/* poner en consola la f(x) */
function buscarEstado(){
    let estado = prompt("Ingrese 'presente' o 'ausente' para conocer el listado de alumnos")
    let resultado = filtro.filter((x)=> x.estado.includes(estado))
    if (resultado.length > 0){
        console.table(resultado)
    }
}

//Creo una lista (objetos constructores) con las calificaciones de dichos alumnos.
function Nota(nombre, puntaje){
    this.nombre = nombre
    this.puntaje = puntaje
}

const notas = [
    new Nota("martin", 7),
    new Nota("sofia", 7.6),
    new Nota("lucas", 6.5),
    new Nota("mariana", 8.3),
    new Nota("ignacio", 8.8),
    new Nota("lujan", 9),
    new Nota("estefania", 5.5),
    new Nota("jose luis", 10)
  ];
  
  //Redondeo las calificaciones hacia arriba o hacia abajo, de acuerdo al decimal
  notas.forEach(nota=>{
    nota.puntaje = Math.round(nota.puntaje)
  })

  // Ordeno las calificaciones de menor a mayor
  notas.sort((notaA, notaB) => notaA.puntaje - notaB.puntaje)
  
 //Finalmente las muestro en forma de lista
  notas.forEach(nota=>{
    console.log(`${nota.nombre},${nota.puntaje}`)
    })

  
