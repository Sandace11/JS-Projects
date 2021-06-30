let message = "Hello";
let divisor = "1010";
let crc = "0000";

let codeword = CRC(message, divisor, crc) ;
send(codeword, crc);