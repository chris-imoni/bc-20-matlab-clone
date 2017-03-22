var readlineSync = require('readline-sync');
 
// Wait for user's response.
var input = "",
num,
str;

input = readlineSync.question('Enter 1 to create array,\nEnter 2 to create a Matrix \n');
//Converting what the user enter to integer
num = parseInt(input);


if(num == 1){
     str = readlineSync.question('Enter list of numbers separted by comma\n');
    while(str == "" || str == null){
        console.log("Invalid entry. Try again");
         str = readlineSync.question('Enter list of numbers separted by comma\n');
    }

    var arr = str.split(",");
    if(ValidateArr(arr)){
        var result = createArr(arr);
        console.log("["+result.trim(" ") +"]");
    }else{
        console.log("Oops! Your array should contain numbers only. Try again");
    }


}else if(num == 2){
     str = readlineSync.question('Enter numbers separted by comma for each row, separate each row with a semicolon\n');
    while(str == "" || str == null){
        console.log("Invalid entry. Try again");
         str = readlineSync.question('Enter numbers separted by comma for each row, separate each row with a semicolon\n');
    }
    var arr = str.split(";");
    var result = createMatrix(arr);
    if(!result){
        console.log("Oops! Your array should contain numbers only. Try again");
    }else{
        console.log(result);
    }


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

//Function for creating a Matrix
function createMatrix(arr){
	output="", 
	a = [], 
	rows = [],
	row1 = [];
	for(var row=0; row < arr.length; row++){
		a[row] = [];
		rows[row] = arr[row];
		row1 = rows[row].split(",");
        if(!ValidateArr(row1)){
            return false;
        }
		for(var col=0; col < row1.length; col++){
			a[row][col] = row1[col];
			output += a[row][col] +"   ";
		}

		output += '\n';
	}
	
	
	return output;
}
