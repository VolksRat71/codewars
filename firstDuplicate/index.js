function firstDuplicate(a) {
    // Hash set
    var memory = new Array;
    
    for( let i = 0; i < a.length; i++){
        if(memory.includes(a[i])){
            return a[i]
        } else {
            memory.push(a[i])
        }
    }
    return -1;
}
