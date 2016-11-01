var makerjs = require('makerjs');

/*
params:
    - x: x-coordinate
    - y: y-coordinate
    - w: width
    - h: height
    - r: corner radius
*/
function Slot(x, y, w, h, r) {

    var paths = {
        line1: new makerjs.paths.Line([0+x, 0+y], [0+x+w, 0+y]),
        line2: new makerjs.paths.Line([0+x+w, 0+y], [0+x+w, 0+y-h]),
        line3: new makerjs.paths.Line([0+x+w, 0+y-h], [0+x, 0+y-h]),
        line4: new makerjs.paths.Line([0+x, 0+y-h], [0+x, 0+y])
    };

    paths.arc1 = makerjs.path.dogbone(paths.line1, paths.line2, r);
    paths.arc2 = makerjs.path.dogbone(paths.line2, paths.line3, r);
    paths.arc3 = makerjs.path.dogbone(paths.line3, paths.line4, r);
    paths.arc4 = makerjs.path.dogbone(paths.line4, paths.line1, r);

    return paths
}

module.exports = Slot;
