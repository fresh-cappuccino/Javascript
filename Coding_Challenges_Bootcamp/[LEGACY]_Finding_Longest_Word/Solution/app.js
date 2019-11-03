/*
Title: finding longest word
::Direction::
// write a function that takes a sentence
// return longest word from the sentence
Examples::
longestWord('The quick brown fox jump over the lazy dog') =>return quick
longestWord('He is the quickest man in the world') =>return quickest
*/

// Method sorting
// split the sentence in an array
// sort the array longer word to shorter word
// return the first item 

function longestWord(sen) {
    let arr = sen.split(" ");
    return arr.sort((a, b) => {
        return b.length - a.length;
    })[0];
}

console.log(longestWord('He is the quickest man in the world'));