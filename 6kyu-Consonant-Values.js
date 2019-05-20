function solve(s) {
    const totals = [];
    const noVowel = s.replace(/[aeiou]/gi, '.').split('.');
    for (let i = 0; i < noVowel.length; i++) {
        const e = noVowel[i];
        let count = 0;
        if(e.length === 0) {
            totals.push(count);
        }else {
            e.split('').forEach((letter) => {count += letter.charCodeAt(0) - 96})
            totals.push(count)
        }
    }
    return Math.max(...totals)
};
