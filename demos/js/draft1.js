var makerjs = require('makerjs');
// import helper function
var createPaths = require('./utils/createPaths');
// import components
var Tablero = require('./components/tablero');

function Draft() {

    var allModels = [
        Tablero(5,5),
        Tablero(50,50),
        Tablero(500,500),
        Tablero(250,250)
    ];

    this.paths = createPaths(allModels);
};

module.exports = Draft;
