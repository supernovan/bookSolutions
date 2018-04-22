console.log(" # # # #\n" +
	"# # # # \n" +
	" # # # #\n" +
	"# # # # \n" +
	" # # # #\n" +
	"# # # # \n" +
	" # # # #\n" +
	"# # # # " )

// lets make it better
var readline = require('readline-sync')

let size = readline.question("What size?")
let str = ""
for (let i = 0; i<size; i++) {
	if (i % 2) {
		str += " # # # #\n"
	} else {
		str += "# # # # \n"
	}
}
console.log(str)