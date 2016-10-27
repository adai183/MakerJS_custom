var makerjs = require('makerjs');

function Slot(w, h) {

    this.paths = {
		//only use positive space
		line1: new makerjs.paths.Line([0, 0], [w, 0]),
      	line2: new makerjs.paths.Line([w, 0], [w, h]),
      	line3: new makerjs.paths.Line([w, h], [0, h]),
      	line4: new makerjs.paths.Line([0, h], [0, 0])
		// center origin
        /*
		line1: new makerjs.paths.Line([-w/2, -h/2], [w/2, -h/2]),
      	line2: new makerjs.paths.Line([w/2, -h/2], [w/2, h/2]),
      	line3: new makerjs.paths.Line([w/2, h/2], [-w/2, h/2]),
      	line4: new makerjs.paths.Line([-w/2, h/2], [-w/2, -h/2])
		*/

    };

}

Slot.metaParameters = [
    { title: "boardWidth", type: "range", min: 0, max: 500, step: 1, value: 1000 },
    { title: "boardHeight", type: "range", min: 0, max: 1000, step: 1, value: 500 }
];

module.exports = Slot;
