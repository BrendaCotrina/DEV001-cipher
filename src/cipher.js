const cipher = {
  encode: function (offset, message) {
    // (X + N) MOD 26
    // ([posicion] + [offset]) Residuo [letras totales]
    // (7 + 3) % 26

    // KROD <-- 
    // 72 79 76 65

    offset = parseInt(offset);

    let abcAsciiStart = 65;
    let result = '';
    for (let letter of message) {
      let letterPosition = (letter.charCodeAt() - abcAsciiStart);
      let newPosition = (letterPosition + offset) % 26;
      let letterEncrypted = String.fromCharCode(newPosition + abcAsciiStart);
      result = result + letterEncrypted;
    }

    return result
  },
  decode: function (offset, message) {
    offset = parseInt(offset);

    let abcAsciiStart = 90;
    let result = '';
    for (let letter of message) {
      let letterPosition = (letter.charCodeAt() - abcAsciiStart);
      let newPosition = (letterPosition - offset) % 26;
      let letterEncrypted = String.fromCharCode(newPosition + abcAsciiStart);
      
      // alert(`letterPosition: ${letterPosition}\nnewPosition: ${newPosition}\nletterEncrypted: ${letterEncrypted}`);
      result = result + letterEncrypted;
    }

    return result
  }
};

export default cipher;
