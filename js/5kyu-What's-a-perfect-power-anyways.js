var isPP = function(n){
    let sum = null;
    for (let i = 2; i < n; i++) {
        sum = Number.parseFloat(Math.log(n) / Math.log(i)).toFixed(9)
        if (sum % 1 === 0) {
            return [i, Math.round(sum)]
        }
    }
    return null
}
