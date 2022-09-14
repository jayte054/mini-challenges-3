/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(num) {
    let decimal = Number(num);
    //the above code converts the string into an integer with the use of the Number()
    //the next step requires the number to be converted to its binary equivalent.
    // using the .toString(2)
  let   binaryRep = decimal.toString(2);
    //the resulting value is a binary number in a string format
    // the next step is to pad the binary number to a 8 bit
    // this is done using the .padStart(8, 0), the parameters passed in the function 
    // are the number of bit you want your binary padded to which is the first part
    // the second part is the value(s) you want added to the front of the binary in a string format
    let binaryNumber = binaryRep.padStart(8, "0");
    // this will result in a binary number with 8 bits
    // the next thing to do is to reverse the binary number, this can't be done as a string  but 
    // it can be done as an array. so we first split the binary number into individual elements in an array
    // using the .split(""), 
  let  binarySplit = binaryNumber.split("");
    // // this results in an array that has each digit in the binary number standing as its own entity
    // // the next step is to reverse the array using .reverse()
  let   binaryReverse = binarySplit.reverse();
    // // this will result in a reversed array of the already split binary number
    // // the next step is to join the array using the .join("")
  let   binaryJoin = binaryReverse.join("");
    // //this will result in a string of digits form the reversed binary number
    // // the next step is to convert the now reversed binary number to a decimal
    // // this is done using the parseInt(), which will take in the parameters of the binary number an its base
  let  newDecimal = parseInt(binaryJoin, 2)
    finalDecimal = newDecimal.toString()
    return  finalDecimal
   
}
console.log(binaryReversal("121"))

module.exports = binaryReversal;
