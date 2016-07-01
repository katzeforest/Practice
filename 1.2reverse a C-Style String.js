/*Write code to reverse a C-Style String. (C-String means that “abcd” is represented as five characters, including the null character.)*/

function reverseStr(str){
	if(str.lengh <= 1)
		return str;
	var j = str.length - 1;
	var res = '';

	while(j>=0) {
		res += str[j];
		j--;
	}
	res += ' ';
	return res;
}


reverseStr('');
reverseStr('2');
reverseStr('abcd');
reverseStr('abcwer44d');