function rotateImage(a) {
    // transpose the matrix (2 moves partner)

    let leng = a.length
    // 123
    // 456
    // 789

// MOVE 1 -------------------------
    for(let i = 0; i < leng; i++){
        for(let j = i; j < leng; j++){
            let tempMatrix = a[i][j];       
            a[i][j] = a[j][i]
            a[j][i] = tempMatrix
        }
    }
    
    // flipped symmetrically
    // 147
    // 258
    // 369
// --------------------------------

// MOVE 2 -------------------------    
    for(let i = 0; i < leng; i++){
        for(var j =0; j < leng/2; j++){
            var tempMatrix = a[i][j]
            a[i][j] = a[i][leng - 1 - j];
            a[i][leng - 1 - j] = tempMatrix
        }
    }
    // flipped horizontally
    // 741
    // 852
    // 963
    
// --------------------------------
    return a;
}