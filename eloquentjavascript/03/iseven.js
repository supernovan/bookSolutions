function isEven (nbr) {
	function innerFunc (tempnbr) {
		if (tempnbr == 0) {
			return true
		} else if (tempnbr == 1) {
			return false
		} else {
			return innerFunc(tempnbr - 2)
		}
	}
	 return innerFunc(Math.abs(nbr))
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-5))