function rot13(str) {

  var cipheredStr = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaRegex = /[A-Z]/;
  
  for (let i = 0; i < str.length; i++) {

    if (alphaRegex.test(str[i])) {
      let j = 0;
      while (str[i] != alphabet[j]) {
        j++;
      }
      j += 13;
      if (j >= alphabet.length) {
        j -= alphabet.length;
      }
      cipheredStr += alphabet[j];

    } else {
      cipheredStr += str[i];
    }
  }
  
  return cipheredStr;
}
