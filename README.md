# Knight's Travails

Este proyecto es parte del currículum de [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

## 📖 Descripción

El reto consiste en representar un tablero de ajedrez como un **grafo** y usar el algoritmo de **BFS (Breadth-First Search)** para calcular el camino más corto que recorre un caballo desde una casilla de inicio hasta una casilla de destino.

La misma lógica se puede extender a otras piezas de ajedrez, como la torre, simplemente cambiando la función que genera los movimientos.

## 🎯 Objetivos de aprendizaje

* Modelar un tablero de 8×8 como un grafo.
* Generar movimientos válidos de un caballo (y opcionalmente de otras piezas).
* Implementar el algoritmo BFS en JavaScript.
* Usar estructuras como:

  * **Cola** para explorar nodos en orden de capas.
  * **Conjunto de visitados** para evitar ciclos.
  * **Mapa de padres** para reconstruir el camino más corto.
* Devolver la secuencia mínima de casillas entre dos puntos dados.

## 🚀 Uso

Ejemplo: encontrar el camino más corto para un caballo entre `[0,0]` y `[3,3]`.

```bash
node index.js
```

Salida esperada (lista de coordenadas):

```js
Caballo de [0,0] a [3,3]: [ [0,0], [1,2], [3,3] ]
```

## 📂 Estructura

* `index.js` → archivo principal para ejecutar ejemplos.
* `movimientosCaballo.js` → lógica de movimientos del caballo.
* `bfs.js` → implementación genérica de BFS.
* `movimientosTorre.js` (opcional) → ejemplo extendido para torre.

## 📝 Notas

* Este proyecto enfatiza más en el **razonamiento con grafos** que en el ajedrez en sí.
* La clave es comprender cómo BFS garantiza el **camino más corto** en un grafo no ponderado.
* El algoritmo se puede generalizar para cualquier pieza de ajedrez.
