var makerjs = require('makerjs');

function Tablero(w, h) {
    var paths = {
        tablero_line1: new makerjs.paths.Line([0, 0], [w, 0]),
      	tablero_line2: new makerjs.paths.Line([w, 0], [w, h]),
      	tablero_line3: new makerjs.paths.Line([w, h], [0, h]),
      	tablero_line4: new makerjs.paths.Line([0, h], [0, 0])
    }

    return paths
}


module.exports = Tablero;
