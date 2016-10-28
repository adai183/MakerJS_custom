function createPaths(pathObjectArr) {
    var index = 0;
    var pathsAll = {};
    for (var i = 0; i < pathObjectArr.length; i++) {
        for (var prop in pathObjectArr[i]) {
            if (pathObjectArr[i].hasOwnProperty(prop)) {
                pathsAll[index] = pathObjectArr[i][prop];
                console.log(pathObjectArr[i].prop);
                index += 1
            }
        }
    }
    return pathsAll
}

module.exports = createPaths;
