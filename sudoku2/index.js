function sudoku2(grid) {
    let hashSet = new Array;

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const current_val = grid[i][j]
            if(current_val != "."){
                // console.log(hashSet)
                if(hashSet.includes(`${current_val}${i}${current_val}${i}${current_val}${i/3}${current_val}${j/3}`)){
                    return false
                } else {
                    hashSet.push(`${current_val}${i}${current_val}${i}${current_val}${i/3}${current_val}${j/3}`)
                }
            }
        }
    }
    
    return true;
}
