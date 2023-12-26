const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(item in sampleObject){
		if(item==key){
			return true;
		}
		else{
			return false;
		}
	}
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
