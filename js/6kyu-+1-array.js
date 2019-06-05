function upArray(arr) {
    if(arr.length === 0) {
        return null
    }
    const arrLen = arr.length - 1;
    let is9 = false;
    for (let i = arrLen; i >= 0; i--) {
        if(arr[i] < 0 || arr[i] > 9) {
            return null
        }
        if(i === arrLen) {
            if(arr[i] === 9) {
                is9 = true;
                arr[i] = 0;
                continue;
            }else {
                arr[i]+=1;
            }
        }
        if(is9) {
            if(arr[i] !== 9) {
                arr[i]+=1;
                is9 = false;
            }else {
                arr[i] = 0;
                if(i === 0){
                    arr.unshift(1)
                }
            }
        }
    }
    return arr
}
