function dataReverse(data) {
    var revBitArr = [];

    function chunk(array, size){
        if(!array) return [];
        const firstChunk = array.slice(0, size);
        if(!firstChunk.length) return array
        return [firstChunk].concat(chunk(array.slice(size, array.length), size))
    };

    var bitArr = chunk(data, 8).reverse()
    
    for(i = 0; i < bitArr.length; i++){
        bitArr[i].forEach( bit => {
            revBitArr.push(bit)
        })
    }

    return revBitArr
}