var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var input = readlineSync.question('Enter 1 to create array,\nEnter 2 to create a Matrix \n');
//Converting what the user enter to integer
var num = parseInt(input);

if(num == 1){
    var str = readlineSync.question('Enter list of numbers separted by comma\n');
    while(str == "" || str == null){
        console.log("Invalid entry. Try again");
        var str = readlineSync.question('Enter list of numbers separted by comma\n');
    }

    var arr = str.split(",");
    if(ValidateArr(arr)){
        var result = createArr(arr);
        console.log("["+result.trim(" ") +"]");
    }else{
        console.log("Oops! Your array should contain numbers only. Try again");
    }

}else if(num == 2){
    // will do something about this
}else{
    console.log("You entered an invalid command. Try again");
}


//Making sure the user inputs only numbers
function ValidateArr(arr){
	for (var i = 0; i < arr.length; i++){
		if(isNaN(arr[i])){
			return false;
		}
	}
	
	return true;

}

//Function for creating the array
function createArr(arr){
    var output = "";
	for (var i = 0; i < arr.length; i++){
		output += arr[i] +"   ";
	}
	
	return output;
}
