Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

function dataReverse(data) {
    let count = 0;
    let dataCount = data.length/8;
    let reverseData = [];
    while (count < dataCount) {
        let dataBlock = [];
        for (let i = (0+(count*8)); i < 8+(count*8); i++) {
            dataBlock.push(data[i])
        }
        reverseData.push(dataBlock)
        count++
    }
    reverseData.reverse();
    let newArr = reverseData.flat();
    return newArr
}
