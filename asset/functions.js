function getrandom(x) {
  if (x == "phone") {
    var n1 = Math.floor(Math.random() * 1000);
    var n2 = Math.floor(Math.random() * 1000);
    var n3 = Math.floor(Math.random() * 10000);
    return (
      "(" +
      ("000" + n1).slice(-3) +
      ") " +
      ("000" + n2).slice(-3) +
      "-" +
      ("0000" + n3).slice(-4)
    );
  } else if (x == "zip") {
    var n1 = Math.floor(Math.random() * 1000);
    var n2 = Math.floor(Math.random() * 10000);
    return ("000" + n1).slice(-3) + "-" + ("0000" + n2).slice(-4);
  } else {
    return "not supported";
  }
}
CustomFunctions.associate("RANDOM", getrandom);
