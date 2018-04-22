countChar = function (str, c = "B") {
	let nbrocc = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] == c) {
			nbrocc++
		}
	}
	return nbrocc
}



console.log(countChar("BBc"))
console.log(countChar("kakkerlak", "k"))