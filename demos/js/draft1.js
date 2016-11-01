var makerjs = require('makerjs');
// import helper function
var createPaths = require('./utils/createPaths');
// import components
var Tablero = require('./components/tablero');
var Slot = require('./components/slot');

function Draft() {

    var allModels = [
        Tablero(800, 500),
        Slot(100, 300, 100, 200, 15),
        Slot(220, 300, 100, 200, 15),
        Slot(340, 300, 100, 200, 15),
        Slot(460, 300, 200, 100, 15),
    ];

    this.paths = createPaths(allModels);
};

module.exports = Draft;
