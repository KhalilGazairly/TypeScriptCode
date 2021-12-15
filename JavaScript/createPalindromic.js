function palindromeCreator(str) {
    //if statement to check if str is already a Palindrome
    if (str === str.split("").reverse().join("")) {
      return "Palindrome";
    }
  
    //Remove one letter
    for (let i = 0; i < str.length; i++) {
      const letter = str.slice(0, i) + str.slice(i + 1);
      // console.log(str.slice(0, i) + i + str.slice(i + 1))//Great way to visualized whats being removed
      if (letter === letter.split("").reverse().join("")) {
        return str[i];
      }
    }
    //Remove two letters
    for (let i = 0; i < str.length; i++) {
      const letter = str.slice(0, i) + str.slice(i + 1);
      for (let j = i; j < letter.length; j++) {
        const twoLetters = letter.slice(0, j) + letter.slice(j + 1);
        if (twoLetters === twoLetters.split("").reverse().join("")) {
          return str[i] + letter[j];
        }
      }
    }
    //if palindrome does not exist, return 'not possible'
    return "not possible";
  }
  console.log(palindromeCreator("raccecar banana"));
  