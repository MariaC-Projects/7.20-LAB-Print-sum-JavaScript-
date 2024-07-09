function printSum(x, y) {
   const numX=parseFloat(x);
   const numY = parseFloat(y);
   const isNumX = !isNaN(numX);
   const isNumY = !isNaN(numY);

   if (isNumX && isNumY) {
      console.log(`Sum is ${numX + numY}.`);
   } else if (!isNumX && !isNumY) {
      console.log(`'${x}' and '${y}' are not numbers.`);
   } else if (!isNumX) {
      console.log(`'${x}' is not a number.`);
   } else {
      console.log(`'${y}' is not a number.`);
   }
   
}

console.log("Testing printSum()...");

printSum(3, 6);            // 9
printSum(3.5, 6.1);        // 9.6
printSum("hello", 6);      // 'hello' is not a number
printSum(10, "hi");        // 'hi' is not a number
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers


// Do NOT remove the following line
export default printSum;
