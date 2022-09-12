function dzielenie(a, b) {
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
    console.log(dzielenie("a"));
	console.log(dzielenie(5));
	console.log(dzielenie(6));
    console.log(dzielenie(8,4));
	console.log(dzielenie(7,3));
	//console.log(dzielenie(a));
    console.log(dzielenie('b'));
  