/* global CustomFunctions */

// Load the Custom Functions runtime
importScripts(
  "https://appsforoffice.microsoft.com/lib/1/custom-functions-runtime.js"
);

function getrandom(x) {
  if (x === "phone") {
    return "5432167890";
  } else if (x === "zip") {
    return "12345";
  }
  return "not supported";
}

CustomFunctions.associate("RANDOM", getrandom);
