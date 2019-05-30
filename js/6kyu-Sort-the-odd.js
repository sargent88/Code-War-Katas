function sortArray(array) {
    if (array.length === 0) array;
    const newArray = array.filter(x => x%2 !== 0).sort((a, b) => a - b);
    array.forEach((element, index) => {
        if(element%2 === 0) newArray.splice(index, 0, element);
    });
    return newArray
}
