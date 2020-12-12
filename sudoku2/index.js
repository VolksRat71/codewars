function sudoku2(grid) {
    let hashSet = new Array;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const current_val = grid[i][j]
            if (current_val != ".") {
                // console.log(hashSet)
                if (hashSet.includes(`${current_val}${i}${current_val}${i}${current_val}${i / 3}${current_val}${j / 3}`)) {
                    return false
                } else {
                    hashSet.push(`${current_val}${i}${current_val}${i}${current_val}${i / 3}${current_val}${j / 3}`)
                }
            }
        }
    }

    return true;
}

function sudoku2(grid) {
    // https://dev.to/alisabaj/checking-each-row-column-and-square-is-this-sudoku-board-valid-jg7
    let store = {
        rows: {},
        cols: {},
        square: {},
    };

    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {
            const box = grid[i][j];

            if (!store["rows"][i] && box !== ".") {
                store["rows"][i] = [];
                store["rows"][i].push(box);
            } 
            else if (box !== "." && !store["rows"][i].includes(box)) {
                store["rows"][i].push(box);
            } 
            else if (store["rows"][i] && store["rows"][i].includes(box)) {
                return false;
            }

            if (!store["cols"][j] && box !== ".") {
                store["cols"][j] = [];
                store["cols"][j].push(box);
            } 
            else if (box !== "." && !store["cols"][j].includes(box)) {
                store["cols"][j].push(box);
            } 
            else if (store["cols"][j] && store["cols"][j].includes(box)) {
                return false;
            }

            const squareRowId = Math.ceil((i + 1) / 3);
            const squareColId = Math.ceil((j + 1) / 3);
            const squareId = `${squareRowId}-${squareColId}`;

            if (!store["square"][squareId] && box !== ".") {add
                store["square"][squareId] = [];
                store["square"][squareId].push(box);
            } 
            else if (box !== "." && !store["square"][squareId].includes(box)) {
                store["square"][squareId].push(box);
            } 
            else if (
                store["square"][squareId] &&
                store["square"][squareId].includes(box)
            ) {
                return false;
            }

        }
    }
    return true;
}
