//PRE-ENTREGA 3

//Creo la lista de estudiantes
const lista =[
    {nombre: "martin", grado: "1A", estado: "presente"},
    {nombre: "sofia", grado: "1A", estado: "ausente"},
    {nombre: "lucas", grado: "1B", estado: "ausente"},
    {nombre: "mariana", grado: "1B", estado: "presente"},
    {nombre: "ignacio", grado: "1A", estado: "presente"},
    {nombre: "lujan", grado: "1B",  estado: "presente"},
]

//Utilizo el getElementbyId para traer "formulario-estudiante" del html.
const formulario = document.getElementById("formulario-estudiante");

//Utilizo el evento addEventListener para que me 'escuche' el evento a la hora de poner "agregar estudiante"
formulario.addEventListener("submit", function(event){
  event.preventDefault(); // Para prevenir el envío del formulario
  const nombre = document.getElementById("nombre").value;
  const grado = document.getElementById("grado").value;
  const estado = document.getElementById("estado").value;

  lista.push({nombre, grado, estado});
  console.table(lista);

  formulario.reset(); //para que me borre los datos del formulario, una vez ingresados.
})
