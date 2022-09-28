module.exports = function dzielenie(a, b) {
if (b==null){
b=2
}
  if (isNaN(a) || isNaN(b)) {
    return null;
  } else {
  
    if (a % b === 0) {
      return true;
    } else if (a % b != 0) {
      return false;
    }
  }
}

  