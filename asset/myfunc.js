/* global CustomFunctions */

function getRandomData(dataType) {
  if (dataType === "phone") {
    return "5432167890";
  }
  if (dataType === "zip") {
    return "12345";
  }
  return "not supported";
}

CustomFunctions.associate("GETRANDOMDATA", getRandomData);
