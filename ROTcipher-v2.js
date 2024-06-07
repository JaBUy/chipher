function rot13(str) {

  var cipheredStr = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const key = 13;
  
  for (let i = 0; i < str.length; i++) {

    if (/[A-Z]/.test(str[i])) {
      let j = 0;
      while (str[i] != alphabet[j]) {
        j++;
      }
      j += key;
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
