// complete the given function

function palindrome(str){
	let rev=str.split("").reverse().join("");
	return rev.toLowerCase() === str.toLowerCase()
}
module.exports = palindrome
