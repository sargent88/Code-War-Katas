function deepCount(a){
    let count = 0;
    let loopFunc = (arr) => {
        arr.map(x => {
            if(Array.isArray(x)) {
                count+=1;
                loopFunc(x);
            }else {
                count+=1;
            }
        })
    };
    a.map(x => {
        if(Array.isArray(x)) {
            loopFunc(x);
            count+=1;
        }else {
            count+=1;
        }
    });
    return count
}
