var makerjs = require('makerjs');

function Slot(A, B, tD) {

	var tR = tD/2;
	var line1 = new makerjs.paths.Line([-A/2, -B/2], [A/2, -B/2]);
	var line2 = new makerjs.paths.Line([A/2, -B/2], [A/2, B/2]);
	var line3 = new makerjs.paths.Line([A/2, B/2], [-A/2, B/2]);
	var line4 = new makerjs.paths.Line([-A/2, B/2], [-A/2, -B/2]);
	A += 20;
	B += 20;
	var line5 = new makerjs.paths.Line([-A/2, -B/2], [A/2, -B/2]);
	var line6 = new makerjs.paths.Line([A/2, -B/2], [A/2, B/2]);
	var line7 = new makerjs.paths.Line([A/2, B/2], [-A/2, B/2]);
	var line8 = new makerjs.paths.Line([-A/2, B/2], [-A/2, -B/2]);


	this.paths = {
		line1: line1,
		line2: line2,
		line3: line3,
		line4: line4,
		arc1 : makerjs.path.dogbone(line1, line2, tR),
		arc2 : makerjs.path.dogbone(line2, line3, tR),
		arc3 : makerjs.path.dogbone(line3, line4, tR),
		arc4 : makerjs.path.dogbone(line4, line1, tR),
		line5: line5,
		line6: line6,
		line7: line7,
		line8: line8,
		arc5 : makerjs.path.dogbone(line5, line6, tR),
		arc6 : makerjs.path.dogbone(line6, line7, tR),
		arc7 : makerjs.path.dogbone(line7, line8, tR),
		arc8 : makerjs.path.dogbone(line8, line5, tR)
	};

}

Slot.metaParameters = [
    { title: "A", type: "range", min: 12, max: 100, step: 1, value: 50 },
    { title: "boardWidth", type: "range", min: 11, max: 21, step: .1, value: 18 },
  	{ title: "tool Diameter", type: "range", min: 3, max: 12, step: 1, value: 6 }
];

module.exports = Slot;
