var estudiantes = [
    
    {
    apellidop: "De Luna",
    apellidom: "De la Fuente",
    nombre: "Fernando",
    edad: 21,
    fechanacimiento: {
    año: 2000,
    mes: "Agosto",
    dia: 22
     },
    carrera: "IRYC"
    },

    {
    apellidop: "Cruz",
    apellidom: "Rodriguez",
    nombre: "Brandon",
    edad: 23,
    fechanacimiento: {
    año: 1998,
    mes: "Mayo",
    dia: 5
     },
     carrera: "IRYC"
    },

    {
        apellidop: "Leija",
        apellidom: "Chavana",
        nombre: "Ediel",
        edad: 22,
        fechanacimiento: {
        año: 1999,
        mes: "Septiembre",
        dia: 4
         },
         carrera: "IRYC"
        },
]
var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < estudiantes.length; i++) {
    var templ = document.getElementById ('tbodyestudiantes').content.cloneNode(true);
    var celnumero = templ.querySelector("span[name='tbodynumero']");
    var celnombre = templ.querySelector("span[name='tbodynombre']");
    var celedad = templ.querySelector("span[name='tbodyedad']");
    var celcarrera = templ.querySelector("span[name='tbodycarrera']");

    celnumero.innerText = i + 1
    celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
    celedad.innerText = estudiantes[i].edad;
    celcarrera.innerText = estudiantes[i].carrera

    table.append(templ);
}