function send(codeword, crc) {
    
   console.log("\n\nRECEIVER END---------\n");
   remainder = codeword;

   for (let j = 0; j < divident.length; j++) {
      remainder[0] == "1" ? div = divisor : div = "0000";
      for (let i = 0; i < divisor.length; i++) {
         remainder = remainder.replaceAt(i, XOR(remainder[i], div[i]));
      }
      remainder = remainder.slice(1);
   }
   console.log("Remainder : " + remainder);
   if (remainder == crc) {
      let ReceivedMessage = codeword.slice(0, -1 * crc.length);
      console.log("Received Message = " + ABC.toAscii(ReceivedMessage));
   } else {
       console.log("Message Discarded!");
   }


}