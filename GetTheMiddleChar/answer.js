function getMiddle(s){
    let strArr = s.split("");
    lengthArr = strArr.length

    if(s.length % 2){
    oddMiddle = lengthArr / 2 +.5;
    oddOutput();

    } else {
    evenMiddle1 = lengthArr / 2;
    evenMiddle2 = lengthArr / 2 + 1;
    evenOutput();
    };

    function oddOutput(){
    let oddMiddleVal = strArr[oddMiddle - 1];
    output = oddMiddleVal;
    }

    function evenOutput(){
    let evenMiddleVal = strArr[evenMiddle1 - 1] + strArr[evenMiddle2 - 1];
    output = evenMiddleVal;
    }

    return output
}