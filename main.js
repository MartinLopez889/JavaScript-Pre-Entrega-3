//PRE-ENTREGA 3

//Creo la lista de estudiantes
const lista = JSON.parse(sessionStorage.getItem("listaAlumnos")) || [
    {nombre: "martin", curso: "javascript", estado: "presente"},
    {nombre: "sofia", curso: "javascript", estado: "ausente"},
    {nombre: "lucas", curso: "javascript", estado: "ausente"},
    {nombre: "mariana", curso: "javascript", estado: "presente"},
    {nombre: "ignacio", curso: "javascript", estado: "presente"},
    {nombre: "lujan", curso: "javascript",  estado: "presente"},
]
console.table(lista)

//Utilizo el getElementbyId para traer "formulario-estudiante" del html.
const formulario = document.getElementById("formulario-estudiante");

//Utilizo el evento addEventListener para que me 'escuche' el evento a la hora de poner "agregar estudiante"
formulario.addEventListener("submit", function(event){
    event.preventDefault(); // Para prevenir el envío del formulario
    const nombre = document.getElementById("nombre").value;
    const curso = document.getElementById("curso").value;
    const estado = document.getElementById("estado").value;

    //Verifico que el alumno ingresado no esté repetido, y luego utilizo el operador ternario "?" para que me haga un alert esté o no, repetido.
    const verificarAlumno = lista.find(alumno => alumno.nombre === nombre);

    const mensaje = verificarAlumno ? "Ese alumno ya está registrado" : (lista.push({nombre, curso, estado}), console.table(lista), "Nuevo alumno registrado");

    alert(mensaje);
    sessionStorage.setItem("listaAlumnos", JSON.stringify(lista))
    
    formulario.reset();//para que me borre los datos del formulario, una vez ingresados.
  }
)