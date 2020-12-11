function firstNotRepeatingCharacter(s) {
    let memory = new Object;
    let arr = [...s];
    let output;
    
    for(let i = 0; i < arr.length; i++){
        if(memory[arr[i]] == null) memory[arr[i]] = 0;
        memory[arr[i]] == memory[arr[i]]++
    }
    
    for (const [key, value] of Object.entries(memory)) {
        for(let i = 0; i < arr.length; i++) {
            if(key == arr[i] && value == 1) {
                output = arr[i]
                return output
            }
        }
    }
    
    if(output == undefined){
        return "_"
    }
}