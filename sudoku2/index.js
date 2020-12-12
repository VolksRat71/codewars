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
    let len = grid.length;
    let cubeNum = [-1, 3, 8, 12, 17, 21] // <- first   
    
    incCube() // hoisted
    
    function checkTable(hashTable){
        for(var i = 0; i < hashTable.length; i++){
            if(!hashTable.includes(hashTable[i])) {
                return false;
            } 
        }
    }
    
    function incCube(){
        for(var i= 0; i < 11; i++){
            cuber(cubeNum)
            cubeNum.forEach(function(item, index) {
                this[index] += 3
            }, cubeNum) 
            
            if ([i] == 3) {
                cubeNum = [26, 30, 35, 39, 44, 48]
            } 
            if ([i] == 7) {
                cubeNum = [53, 57, 62, 66, 71, 75]
            }
        }
    }
    
    function cuber(constraints) {
        let hashTable = new Array;
        let tempCounter = 0;
        
        for(var c = 0; c < len; c++){
            for(var r = 0; r < len; r++){
                if( tempCounter > constraints[0] && tempCounter < constraints[1] || 
                    tempCounter > constraints[2] && tempCounter < constraints[3] || 
                    tempCounter > constraints[4] && tempCounter < constraints[5]) {
                    if(grid[c][r] != '.'){
                        hashTable.push(grid[c][r])
                    }
                }
                tempCounter++
            }
        }
        checkTable(hashTable)
    }
    
    return true;
}

function sudoku2(grid) {
    let output = true
    
    let store = {
        rows: new Object,
        columns: new Object,
        cubes: new Object
    }
    
    for(let row = 0; row < 9; row++){
        if(!store['rows'][row]) store['rows'][row] = new Array;
        
        for(let col = 0; col < 9; col++){
            if(!store['columns'][col]) store['columns'][col] = new Array;
            const box = grid[row][col];
            
            if(box !== '.'){
                // Row filtering
                !store['rows'][row].includes(box)? 
                store['rows'][row].push(box):
                output = false
                
                // Column Filtering
                !store['columns'][col].includes(box)?
                store['columns'][col].push(box):
                output = false  
            
                // Cube Filter
                const cubeRowId = Math.ceil((row + 1) / 3);
                const cubeColId = Math.ceil((col + 1) / 3);
                const cubeId = `${cubeRowId} - ${cubeColId}`
                
                if(!store['cubes'][cubeId]) store['cubes'][cubeId] = new Array;
                !store['cubes'][cubeId].includes(box)?
                store['cubes'][cubeId].push(box):
                output = false;
            }
        }
    }
    return output;
}