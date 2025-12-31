function getrandom(x) {
  if (x == "phone") {
    return "54321";
  } else if (x == "zip") {
    return "12345";
  } else {
    return "not supported";
  }
}
CustomFunctions.associate("RANDOM", getrandom);
