// Worked in testing, but was to slow on submitting
function firstDuplicate(a) {
    // Hash set
    var memory = new Array;
    
    for( let i = 0; i < a.length; i++ ){
        if(memory.includes(a[i])){
            return a[i]
        } else {
            memory.push(a[i])
        }
    }
    return -1;
}

// This one is fast enough 
function firstDuplicate(a) {
    for( let i = 0; i < a.length; i++ ){
        if(a[Math.abs(a[i]) - 1] < 0){
            return Math.abs(a[i])
        } else {
            a[Math.abs(a[i]) - 1] = -a[Math.abs(a[i]) - 1]
        }
    }
    return -1;
}