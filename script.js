function threeSum() {
// write your code here
	let deci = Number(document.getElementById("decimal").value);
	let binary = "";
	while (deci > 0){
		if (deci % 2 == 1) {
			binary = '1' + binary;
		}
		else{
			binary = '0' + binary;
		}
		deci = Math.floor(deci / 2);
	}
	document.getElementById("ans").innerHTML = "The binary value is " + binary;
}
