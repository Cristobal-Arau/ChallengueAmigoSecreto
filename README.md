# ChallengueAmigoSecreto
Challengue amigo secreto

En este pequeño challengue se utiliza javascript, css y html para crear una aplicación web que permite realizar un sorteo
Para ello se definen tres funciones, siendo estas
agregarAmigo(), en esta función se rescata el amigo ingresado por el usuario en el html y se verifica que no venga vacio, en caso de estar vacio saltara un mensaje emergente en pantalla que solicitara ingresar un nombre,
en caso contrario se añadira a una lista y se mostrara la lista en pantalla con la función mostrarAmigo().
sortearAmigo(), en esta función se valida que haya aún que sea 1 amigo, si esto se cumple entonces se escoge un numero al azar con la función Math.random que es asignada a una variable, luego  se asigna a la variable
amigoescogido el resultado de la busqueda en la lista 'listaAmigos' para a continuación mostrarlo en pantalla.
mostrarAmigo(), en esta función se rescata la lista obtenida tras haber ingresado amigos y por cada elemento en la tabla se ira recorriendo la lista hasta finalizar, con esto se recorrera todos los elementos de la lista y se imprimiran en pantalla.
