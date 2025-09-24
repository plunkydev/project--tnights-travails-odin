export const knightMoves = ([x, y]) => {
    //-- todos los desplazamientos posibles del caballo (L): 8 combinaciones.
    //-- (dx, dy) se suman a (x, y). Por ejemplo, [2,1] significa: 2 en x, 1 en y.
    const movements = [[2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]]
    // Aquí acumularemos solo los movimientos que sigan dentro del tablero 8x8.
    let neighbors = [];
    // Recorremos cada vector de movimiento (dx, dy).
    for (let [dx, dy] of movements) {
        // Calculamos la casilla candidata sumando el desplazamiento.
        let nx = x + dx;
        let ny = y + dy;
        // Filtro de límites del tablero: deben quedar entre 0 y 7 inclusive.
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            // Si es válida, la añadimos a la lista de neighbors.
            neighbors.push([nx, ny]);
        }
    }
    // Devolvemos todas las casillas alcanzables en 1 salto desde [x,y].
    return neighbors;
}