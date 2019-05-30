function rank(st, we, n) {
    const alphabet ="abcdefghijklmnopqrstuvwxyz";
    let stArray = st.split(',');
    if(st.length === 0) {
        return "No participants"
    }else if(n > stArray.length) {
        return "Not enough participants"
    }else {
        const namesValueArray = [];
        for (let i = 0; i < stArray.length; i++) {
            let nameValue = 0;
            nameObj = {};
            const name = stArray[i].toLowerCase();
            for (let j = 0; j < name.length; j++) {
                letterValue = alphabet.indexOf(name[j]) + 1
                nameValue += letterValue
            }
            nameValue = (nameValue + name.length)*we[i]
            nameObj = {name: stArray[i], value: nameValue}
            namesValueArray.push(nameObj)
        }
        namesValueArray.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else {
                return 1
            }
        })
        namesValueArray.sort((a, b) => {return (b.value - a.value)})
        index = stArray.indexOf(namesValueArray[n-1].name)
        return stArray[index]
    }
}
