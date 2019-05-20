function encodeResistorColors(ohmsString) {
    const bands = {
        0: 'black', 1: 'brown', 2: 'red', 3: 'orange', 4: 'yellow', 5: 'green', 6: 'blue', 7: 'violet', 8: 'gray', 9: 'white'
    }
    const ohms = ohmsString.split('');
    const cutOff = ohms.length-5;
    ohms.splice(cutOff,5);
    if(ohms[ohms.length - 1] === 'M') {
        ohms.pop();
        const num = String(Number(ohms.join('')) * 1000000);
        return answer = `${bands[num[0]]} ${bands[num[1]]} ${bands[num.length - 2]} gold`;
    }else if(ohms[ohms.length - 1] === 'k') {
        ohms.pop();
        const num = String(Number(ohms.join('')) * 1000);
        return answer = `${bands[num[0]]} ${bands[num[1]]} ${bands[num.length - 2]} gold`;
    }else {
        const colors = [];
        for (let i = 0; i < ohms.length; i++) {
            const e = ohms[i];
            if(i >= 2) colors.push(bands[Number(e)+1])
            else colors.push(bands[Number(e)])
        }
        colors.push('gold')
        if(colors.length === 3) colors.splice(2, 0, bands[0])
        return answer = colors.join(' ')
    }
}
