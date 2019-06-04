function multiplicationTable(row,col){
    let finalArray = [];
    for (let i = 1; i <= row; i++) {
        let firstArray = [];
        for (let k = 1; k <= col; k++) {
            let product = i*k
            firstArray.push(product)
        }
        finalArray.push(firstArray)
    }
    return finalArray
}
