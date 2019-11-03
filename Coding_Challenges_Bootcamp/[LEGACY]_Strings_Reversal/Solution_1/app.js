/*
Title: Reverse a strings
    ::Direction::
    // given a strings
    // write a function that takes the strings
    // make reverse of the strings
    // return the reverse strings
    Examples:
    reverse("hi") => return ih
    reverse("hello") => return olleh
    reverse("reverseMe") => return eMesrever
*/

function reverse(str) {
    let reversedStr = str.split("").reverse().join("");
    return reversedStr;
};

console.log(reverse('hello'));

