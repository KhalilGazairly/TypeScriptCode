var longestPalindromic = function (string) {
    var length = string.length;
    var result = "";
  
    var centerString = function (left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        left--;
        right++;
      }
      return string.slice(left + 1, right);
    };
  
    for (var i = 0; i < length; i++) {
      var oodPa = centerString(i, i + 1);
      var evenPa = centerString(i, i);
  
      if (oodPa.length > result.length) {
        result = oodPa;
      }
      if (evenPa.length > result.length) {
        result = evenPa;
      }
    }
    if (result.length >= 2) {
      return "the palindrome is : none";
    } else {
      return (
        "the palindrome is : " + result + " and its length is: " + result.length
      );
    }
  };
  
  console.log(longestPalindromic("abcdefgg"));
  