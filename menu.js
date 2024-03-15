fetch(menu.json)
//Que hace? Esta linea iniciada la carga del archivo menu.json fetch es una funcion de javaScript que facilita la realizacion de solicitudes de red, como obtener de un archivo o un endpoint de API.
//Como funciona? fetch devuelve una promesa que, cuando resuelve, tendra acceso a la respuesta de la solicitud. Esta respuesta no es dirtectamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma
.then (responde => responde.json())
//Que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (esto asume que el cuerpo de la respuesta est5a en formato JSON).
//Como funciona? el metodo.json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato.JSON.


