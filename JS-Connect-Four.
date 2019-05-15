var whoIsWinner = function(piecesPositionList) {
    const answers = [];
    const board = [
        { A: [] },
        { B: [] },
        { C: [] },
        { D: [] },
        { E: [] },
        { F: [] },
        { G: [] },
    ];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    // create the board
    piecesPositionList.forEach(moves => {
        const move = moves.split('_');
        if('A' === move[0]) board[0].A.push(move[1]);
        if('B' === move[0]) board[1].B.push(move[1]);
        if('C' === move[0]) board[2].C.push(move[1]);
        if('D' === move[0]) board[3].D.push(move[1]);
        if('E' === move[0]) board[4].E.push(move[1]);
        if('F' === move[0]) board[5].F.push(move[1]);
        if('G' === move[0]) board[6].G.push(move[1]);
    })
    // check for same row
    for (let i = 0; i < board.length; i++) {
        const element = board[i];
        for (let key in element) {
            for (let i = 0; i < 3; i++) {
                const e = element[key];
                if ('Red' === e[i] && 'Red' === e[i+1] && 'Red' === e[i+2] && 'Red' === e[i+3]) {
                    answers.push(e[i]);
                }
                if('Yellow' === e[i] && 'Yellow' === e[i+1] && 'Yellow' === e[i+2] && 'Yellow' === e[i+3]) {
                    answers.push(e[i]);
                }
            }
        }
    }
    // check for same column
    for (let i = 0; i < 4; i++) {
        const e = board;
        for (let j = 0; j < 7; j++) {
            if('Red' === e[i][letters[i]][j] && 'Red' === e[i+1][letters[i+1]][j] && 'Red' === e[i+2][letters[i+2]][j] && 'Red' === e[i+3][letters[i+3]][j]) {
                answers.push(e[i][letters[i]][j]);
            }
            if('Yellow' === e[i][letters[i]][j] && 'Yellow' === e[i+1][letters[i+1]][j] && 'Yellow' === e[i+2][letters[i+2]][j] && 'Yellow' === e[i+3][letters[i+3]][j]) {
                answers.push(e[i][letters[i]][j]);
            }
        }
    }
    // check for lr diagonal
    for (let i = 0; i < 4; i++) {
        const e = board;
        for (let j = 0; j < 7; j++) {
            if('Red' === e[i][letters[i]][j] && 'Red' === e[i+1][letters[i+1]][j+1] && 'Red' === e[i+2][letters[i+2]][j+2] && 'Red' === e[i+3][letters[i+3]][j+3]) {
                answers.push(e[i][letters[i]][j]);
            }
            if('Yellow' === e[i][letters[i]][j] && 'Yellow' === e[i+1][letters[i+1]][j+1] && 'Yellow' === e[i+2][letters[i+2]][j+2] && 'Yellow' === e[i+3][letters[i+3]][j+3]) {
                answers.push(e[i][letters[i]][j]);
            }
        }
    }
    // check for rl diagonal
    for (let i = 0; i < 4; i++) {
        const e = board;
        for (let j = 0; j < 7; j++) {
            if('Red' === e[i][letters[i]][j+3] && 'Red' === e[i+1][letters[i+1]][j+2] && 'Red' === e[i+2][letters[i+2]][j+1] && 'Red' === e[i+3][letters[i+3]][j]) {
                answers.push(e[i][letters[i]][j+3]);
            }
            if('Yellow' === e[i][letters[i]][j+3] && 'Yellow' === e[i+1][letters[i+1]][j+2] && 'Yellow' === e[i+2][letters[i+2]][j+1] && 'Yellow' === e[i+3][letters[i+3]][j]) {
                answers.push(e[i][letters[i]][j+3]);
            }
        }
    }
    if(answers.length === 1) {
        return answers[0]
    }else if(answers.length > 1) {
        const allEqual = answers.every((val) => val === answers[0])
        if(allEqual) {
            return answers[0]
        }else {
            piecesPositionList.pop();
            return whoIsWinner(piecesPositionList);
        }
    }else {
        return "Draw"
    }
}
