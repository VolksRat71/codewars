function repeatStr (n, s) {
    arr = []
    for(i = 0;i < n; i++){
      arr.push(s);
    }
    ans = arr.toString().replace(/[,]+/g, "")
    return ans;
  }