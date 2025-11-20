// complete the given function

function palindrome(str){
	let rev=str.split("").reverse().join("");
	if(rev===str){
		console.log("True");
	}
	else{
		console.log("false");
	}

}
module.exports = palindrome
