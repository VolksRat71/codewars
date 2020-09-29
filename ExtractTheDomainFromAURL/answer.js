function domainName(url){
    return url.replace('http://','').replace('https://','').replace('www.', '').split(/[.,\/#!$%\^&\*;:{}=\_`~()]/)[0];
  }