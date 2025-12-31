// Custom function for Office.js
console.log("Custom functions script loaded");

/**
 * This is a sample custom function that adds two numbers.
 * @customfunction
 * @param {number} first First number.
 * @param {number} second Second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(first, second) {
  console.log("ADD_NUMBERS called with", first, second);
  return first + second;
}

// Export the function
CustomFunctions.associate("ADD_NUMBERS", addNumbers);
