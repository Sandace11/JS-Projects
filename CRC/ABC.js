var ABC = {
    toAscii: function(bin) {
      return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
        return String.fromCharCode(parseInt(bin, 2))
      })
    },
    toBinary: function(str, spaceSeparatedOctets) {
      return str.replace(/[\s\S]/g, function(str) {
        str = ABC.zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
      })
    },
    zeroPad: function(num) {
      return "00000000".slice(String(num).length) + num
    }
  };

