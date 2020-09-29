function filter_list(input){
    var filterNum = input.filter(function(item) {
      return (typeof item === "number")
    })
  
    return filterNum
  };