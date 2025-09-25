export default function findShortestPath(inicio, destino, callback) {
    //verificar que los valores esten dentro del rango de 0 a 7
    if (inicio[0] < 0 || inicio[0] >= 8 || inicio[1] < 0 || inicio[1] >= 8) {
        throw new Error('Coordenadas de inicio fuera de rango');
    }
    if (destino[0] < 0 || destino[0] >= 8 || destino[1] < 0 || destino[1] >= 8) {
        throw new Error('Coordenadas de destino fuera de rango');
    }
    // Cola de BFS: empieza con el nodo inicial.
    // Importante: usamos un arreglo como cola y .shift() para extraer por el frente.
    // (Para datos masivos conviene una cola real o índices; aquí es suficiente.)
    let cola = [inicio];
    // Conjunto de visitados: aquí guardamos claves string de casillas ya vistas.
    // Usamos stringify para que dos arrays con el mismo contenido se traten como iguales.
    let visitados = new Set([JSON.stringify(inicio)]);

    // Mapa de padres: clave = casilla (en string), valor = casilla padre (en string).
    // Sirve para reconstruir el camino al final siguiendo padres desde el destino.
    let padres = {};

    // Bucle principal: mientras haya casillas por explorar.
    while (cola.length > 0) {
        // Sacamos la casilla más antigua en la cola (orden de capas típico de BFS).
        let actual = cola.shift();

        // Criterio de parada temprano: si al DESENCOLAR obtenemos el destino,
        // significa que lo alcanzamos por la primera vez en la capa mínima.
        if (actual[0] === destino[0] && actual[1] === destino[1]) break;

        // Expandimos vecinos de la casilla actual usando las reglas del caballo.
        for (let vecino of callback(actual)) {
            // Generamos la clave string del vecino para Set/objeto.
            let key = JSON.stringify(vecino);

            // Si aún no visitamos esta casilla, la marcamos y la encolamos.
            if (!visitados.has(key)) {
                visitados.add(key);                 // Evita re-explorarla más adelante.
                padres[key] = JSON.stringify(actual); // Guardamos por dónde llegamos.
                cola.push(vecino);                  // Se explorará en una capa posterior.
            }
        }
    }

    // === Reconstrucción del camino mínimo ===
    // Empezamos desde el destino y vamos saltando por padres hasta llegar al inicio.
    let camino = [];
    // Clave string del nodo con el que comenzamos la reconstrucción.
    let nodo = JSON.stringify(destino);

    // Mientras exista un padre definido (en el inicio, no habrá padre y terminará).
    while (nodo !== undefined) {
        // Convertimos la clave string de nuevo a [x,y] y la añadimos al camino.
        camino.push(JSON.parse(nodo));
        // Avanzamos hacia atrás: el nuevo nodo es su padre.
        nodo = padres[nodo];
    }

    // Ahora el camino está de destino→inicio; lo invertimos para inicio→destino.
    camino.reverse();

    // Caso borde: si inicio === destino, el camino queda como [[x,y]] (un solo paso).
    return camino;
}