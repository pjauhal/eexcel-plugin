function getrandom(x) {
  if (x == "phone") {
    return "5432167890";
  } else if (x == "zip") {
    return "12345";
  } else {
    return "not supported";
  }
}
å;
CustomFunctions.associate("RANDOM", getrandom);
