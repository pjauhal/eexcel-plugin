/* global CustomFunctions */

// Load the Custom Functions runtime (required)
importScripts(
  "https://appsforoffice.microsoft.com/lib/1/custom-functions-runtime.js"
);

function getrandom(dataType) {
  if (dataType === "phone") {
    return "5432167890";
  }
  if (dataType === "zip") {
    return "12345";
  }
  return "not supported";
}

// Register the function
CustomFunctions.associate("RANDOM", getrandom);
