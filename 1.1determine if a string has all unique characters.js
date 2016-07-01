function checkUnique(str){
	if(str.lengh == 1)
		return true;
	// If it is ASCII 8bits when str.length > 256, there is definitely a duplicate too. UTC 16 bits.
	var hashtable = new Object(); // Or just {}
	for(var i=0; i<str.length; i++){
		if(hashtable[str[i]] != null){
			hashtable[str[i]] = 1;
			return false;
		} else {
			hashtable[str[i]] = 0;
		}		
	}
	return true;

}

checkUnique('1');
checkUnique('');
checkUnique('eert');