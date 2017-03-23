var readlineSync = require('readline-sync');
 
// Wait for user's response.
var input = "",
num,
str,
result;

input = readlineSync.question(
    'Enter 1 to create array\nEnter 2 to create a Matrix \nEnter 3 to create a vector of zeros\nEnter 4 for matrix and number addition\n' 
    );
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
        result = createArr(arr);
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
    result = createMatrix(arr);
    if(!result){
        console.log("Oops! Your array should contain numbers only. Try again");
    }else{
        console.log(result);
    }


}else if(num == 3){
    str = readlineSync.question('Enter value for row\n');
    while(isNaN(str) || str == 0){
        console.log("Invalid entry! only number other than zero is allowed");
        str = readlineSync.question('Enter value for row\n');
    }

    var r = parseInt(str);

    str = readlineSync.question('Enter value for column\n');
    while(isNaN(str) || str == 0){
        console.log("Invalid entry! only number other than zero is allowed");
        str = readlineSync.question('Enter value for column\n');
    }

    var c = parseInt(str);
    result = vector_zeros(r,c);
    console.log("\n");
    console.log(result);

}else if(num == 4){
    str = readlineSync.question('Enter numbers separted by comma for each row, separate each row with a semicolon\n');
    while(str == "" || str == null){
        console.log("Invalid entry. Try again");
         str = readlineSync.question('Enter numbers separted by comma for each row, separate each row with a semicolon\n');
    }
    var arr = str.split(";");
    str = readlineSync.question('Enter a value for the addition\n');
    while(isNaN(str)){
        console.log("Ivalid entry! Enter a number");
        str = readlineSync.question('Enter a value for the addition\n');
    }
    var b = parseInt(str);
    result = mat_add(arr, b);
    if(!result){
        console.log("Oops! Your array should contain numbers only. Try again");
    }else{
        console.log("\n");
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

//Function for creating vector of zeros
function vector_zeros(rows, cols){
	var iRow = rows,
	jCol = cols,
	output = "",
	f = [];
	for (i = 0; i < iRow; i++) {
	 f[i] = [];
	 for (j = 0; j < jCol; j++) {
	  f[i][j] = 0;
	 }
	}

	for (i = 0; i < iRow; i++) {
	 for (j = 0; j < jCol; j++) {
	  output += f[i][j] + "   ";
	 }
	 output += "\n";
	}

	return output;
}

//Function for adding a number to a matrix
function mat_add(arr, b){
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
			a[row][col] = parseInt(row1[col]) + b;
			output += a[row][col] +"\t";
		}

		output += '\n';
	}
	
	
	return output;
}