var makerjs = require('makerjs');

function Slot(A, B, tD) {

	var tR = tD/2;

    this.paths = {
        line1: new makerjs.paths.Line([-A/2, -B/2], [A/2, -B/2]),
      	line2: new makerjs.paths.Line([A/2, -B/2], [A/2, B/2]),
      	line3: new makerjs.paths.Line([A/2, B/2], [-A/2, B/2]),
      	line4: new makerjs.paths.Line([-A/2, B/2], [-A/2, -B/2])
    };
  	this.paths.arc1 = makerjs.path.dogbone(this.paths.line1, this.paths.line2, tR);
    this.paths.arc2 = makerjs.path.dogbone(this.paths.line2, this.paths.line3, tR);
  	this.paths.arc3 = makerjs.path.dogbone(this.paths.line3, this.paths.line4, tR);
  	this.paths.arc4 = makerjs.path.dogbone(this.paths.line4, this.paths.line1, tR);

}

Slot.metaParameters = [
    { title: "A", type: "range", min: 12, max: 100, step: 1, value: 50 },
    { title: "boardWidth", type: "range", min: 11, max: 21, step: .1, value: 18 },
  	{ title: "tool Diameter", type: "range", min: 3, max: 12, step: 1, value: 6 }
];

module.exports = Slot;
