function DNAtoRNA(dna) {
    splitArr = dna.split('');
    rna = []
    for(i = 0; i < splitArr.length; i++){
    replaceT = dna[i].replace("T", "U");
    rna.push(replaceT);
    }
    return(rna.join(""))
  }