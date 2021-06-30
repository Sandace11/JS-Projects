String.prototype.replaceAt = function(index, replacement) {
   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function XOR(a, b) {
   if ((a == 0 && b == 0) || (a == 1 && b == 1)) {
      return "0";
   } else {
      return "1";
   }
}

function CRC(message, divisor, crc) {

   //SENDER
   divident = ABC.toBinary(message, 0);
   // let divident = "010010000110010101101100011011000110111100100000010101110110111101110010011011000110010000100001";
   
   let remainder = divident + crc;

   console.log(" Initial Word (BIN): " + remainder);
   console.log("Initial Word : " + ABC.toAscii(remainder).slice(0, -1 * crc.length));
   console.log("  Divisor : " + divisor);


   for (let j = 0; j < divident.length; j++) {
      remainder[0] == "1" ? div = divisor : div = "0000";
      for (let i = 0; i < divisor.length; i++) {
         remainder = remainder.replaceAt(i, XOR(remainder[i], div[i]));
      }
      remainder = remainder.slice(1);
   }
   let codeword = divident + remainder;

   console.log("CodeWord: " + codeword);

   return codeword;
}