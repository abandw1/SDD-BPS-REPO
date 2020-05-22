
// JavaScript source code

var elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];

var savedGrid = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];

var puzElem = [[]];

var curCols = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];


var curRows = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];


var gotCols = false;




function clearElements(){
	document.getElementById("tfText").innerHTML = "";
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			var tempElem = document.getElementsByClassName("block_" + j)[i];
			if(!tempElem.classList.contains("prefab")){
				elements[i][j] = "";
				tempElem.innerHTML = "";
				
				
			}
		}	
	}
}


function submitGrid(){
	var bolCheck = true;
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			if(document.getElementsByClassName("block_" + j)[i] == ""){
				bolCheck = false;
			}
			
	}}
	document.getElementById("tfText").style.color = "red";
	
	if(!bolCheck){
	document.getElementById("tfText").innerHTML = "Please fill in all squares.";
	}else{
	saveGrid();
	gameSet(false);
	solveGrid(true,false);
	if(checkSaved() == true){
		document.getElementById("tfText").style.color = "green";
		document.getElementById("tfText").innerHTML = "Correct!";
	}else{
		document.getElementById("tfText").innerHTML = "Incorrect.";
	}
	}
}

function checkSaved(){
	var same = true;
	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				if(savedGrid[i][j] != elements[i][j]){
					same = false;
				}
			}
	}
	return same;
	
}

function saveGrid(){
	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				
				
				savedGrid[i][j] = document.getElementsByClassName("block_" + j)[i].innerHTML;
				
			}
	

		}	
}

function submitElements(){

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			var currentBlock = document.getElementsByClassName("block_" + j)[i];
			currentBlock.classList.remove("prefab");
			if(elements[i][j] != ""){
			currentBlock.classList.add("prefab");
			}
			currentBlock.innerHTML = elements[i][j];
			
			
		}	
	}
	
	loadElements();
	
}


function loadElements(){
	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				
				
				 document.getElementsByClassName("block_" + j)[i].innerHTML = elements[i][j];
				
			}
	

	}	
	
}

function loadGrid(){

	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				
				
				elements[i][j] = document.getElementsByClassName("block_" + j)[i].innerHTML;
				
			}
	

}

}



function solveGrid(redo, load){
	var run = true;
	var num = null;
	var newelem = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
	while(run == true){
		run = false;	
		newelem = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				
				if(elements[i][j] == ""){
				num = rowPairs(j,i);
				if(num == null){
					num = colPairs(j,i);
					if(num == null){
						num = trios(j,i);
						if(num == null){
							num = complete(j,i);
							if(num == null){
								num = identicalCheck(j,i)
								if(num == null){
								num = "";
								}
							}
						}
					}
					
				}
				
				if(num != ""){
					run = true;
				}
				newelem[i][j] = num;
				
				}
				}
	if(redo == false){
		run = false;
	}
	}
	for (var q = 0; q < 6; q++) {
			for (var p = 0; p < 6; p++) {
				if(elements[q][p] == "" && newelem[q][p] != ""){
					elements[q][p] = newelem[q][p];
				}
	}	
	}
	}
	
	if(load == true){
	loadElements();
	}
}

function rowPairs(col,row){
	var _temp = null;
	if(col < 4){
		if(elements[row][col+1] == "1" && elements[row][col+2] == "1"){
			_temp = "0";
		}else if(elements[row][col+1] == "0" && elements[row][col+2] == "0"){
		    _temp = "1";
		}
	}
	if(col > 1){
		if(elements[row][col-1] == "1" && elements[row][col-2] == "1"){
			_temp = "0";
		}else if(elements[row][col-1] == "0" && elements[row][col-2] == "0"){
		    _temp = "1";
		}
	}
	
	return _temp;
	
}

function colPairs(col,row){
	var _temp = null;
	if(row < 4){
		if(elements[row+1][col] == "1" && elements[row+2][col] == "1"){
			_temp = "0";
		}else if(elements[row+1][col] == "0" && elements[row+2][col] == "0"){
			
			_temp = "1";
		}
	}
	if(row > 1){
		if(elements[row-1][col] == "1" && elements[row-2][col] == "1"){
			
			_temp = "0";
		}else if(elements[row-1][col] == "0" && elements[row-2][col] == "0"){
			_temp = "1";
		}
	}
	return _temp;
	
}

function trios(col,row){
	
	var _temp = trioCols(col,row);
	if(_temp != null){
		return _temp
	}else{
	_temp = trioRows(col,row);
	return _temp;
	}
}

function trioCols(col,row){
	var _temp = null;
	if(row > 0 && row < 5){
		if(elements[row+1][col] == "1" && elements[row-1][col] == "1"){
			_temp = "0";
		}else if(elements[row+1][col] == "0" && elements[row-1][col] == "0"){
			_temp = "1";
		}
	}
	return _temp;
	
}
	
function trioRows(col,row){
	var _temp = null; 
	if(col > 0 && col < 5){
	if(elements[row][col-1] == "1" && elements[row][col+1] == "1"){
			_temp = "0";
		}else if(elements[row][col-1] == "0" && elements[row][col+1] == "0"){
			_temp = "1";
		}
	}
	return _temp;
}

function identicalCheck(col,row){
	var count = 0;
	var temp = null;
	var tempRow0 = ['','','','','','']
	var tempRow1 = ['','','','','','']
	for(var i = 0; i < 6; i++){
	tempRow0[i] = elements[row][i];
	tempRow1[i] = elements[row][i];
	if(elements[row][i] == ""){
		count++;
		
	}
		
	}
	if(count == 2){
		tempRow0[col] = "0";
		tempRow1[col] = "1";
		for(i = 0; i < 6; i++){
		if(tempRow0[i] == ""){
			tempRow1[i] = "0";
			tempRow0[i] = "1";
		}
		
	}	
		for(i = 0; i < 6; i++){
			if(JSON.stringify(tempRow0) == JSON.stringify(elements[i])){
				temp = "1"
			}else if(JSON.stringify(tempRow1) == JSON.stringify(elements[i])){
				temp = "0"
			}
		}
	}
	if(temp == null){
	if(gotCols == false){
		gotCols = true;
		for(var x = 0; x < 6; x++)
		{
			for(var y = 0;y < 6; y++){
				curCols[x][y] = elements[y][x]
			}
		}
		
	} 
	count = 0;
	var tempCol0 = ['','','','','','']
	var tempCol1 = ['','','','','','']
	for( i = 0; i < 6; i++){
	tempCol0[i] = elements[i][col];
	tempCol1[i] = elements[i][col];
	if(elements[i][col] == ""){
		count++;
	}
		
	}
	if(count == 2){
		tempCol0[row] = "0";
		tempCol1[row] = "1";
		for(i = 0; i < 6; i++){
		if(tempCol0[i] == ""){
			tempCol1[i] = "0";
			tempCol0[i] = "1";
		}
		
	}	
		for(i = 0; i < 6; i++){
			if(JSON.stringify(tempCol0) == JSON.stringify(curCols[i])){
				temp = "1"
			}else if(JSON.stringify(tempCol1) == JSON.stringify(curCols[i])){
				temp = "0"
			}
		}
	}
	}
	return temp;
	
}
	
function complete(col,row){
	var zeroCount = 0;
	var oneCount = 0;
	//Collumns first.
	for(var m = 0; m < 6; m++){
		if(elements[row][m] == "0"){
			zeroCount++;
		}
		if(elements[row][m] == "1"){
			oneCount++;
		}
	}
	if(zeroCount == 3){
		return "1";
	}else if(oneCount == 3){
		return "0";
	}else{
		zeroCount = 0;
		oneCount = 0;
		//Then rows.
		for(m = 0; m < 6; m++){
		if(elements[m][col] == "0"){
			zeroCount++;
		}
		if(elements[m][col] == "1"){
			oneCount++;
		}
		}
		if(zeroCount == 3){
		return "1";
		}else if(oneCount == 3){
		return "0";
		}else{
			return null
		}
		} 
	
		
}
	
	
function gameSet(check){
	document.getElementById("tfText").innerHTML = "";
	switch(document.getElementById("mySelect").value){
	
		case '1': 
		elements =	[["", "", "", "", "", ""],["", "1", "", "", "", "1"],["", "1", "", "1", "", ""],["", "", "0", "", "", "1"],["", "1", "", "", "", ""],["", "", "", "0", "0", ""]];
		break;
		case '2': 

		elements =	 [["", "1", "", "", "", ""]
			,["", "", "", "0", "", "0"]
			,["", "0", "", "0", "", ""]
			,["1", "", "", "", "1", ""]
			,["", "", "", "", "0", ""]
			,["0", "", "", "", "", ""]];
		break;
		case '3': 
		elements =			[["0", "", "", "1", "", ""]
							,["", "0", "", "", "", "1"]
							,["", "", "1", "1", "", ""]
							,["", "", "", "", "1", "1"]
					  		, ["", "", "", "", "", "0"]
					  		,["0", "", "1", "", "1", ""]];
		break;
		case '4': 
		elements =			[["", "", "", "", "", ""]
							, ["", "1", "", "1", "", "1"]
							, ["", "", "0", "0", "", ""]
							, ["0", "", "", "", "", ""]
							, ["", "", "", "", "1", "1"]
							, ["", "", "0", "", "0", ""]];
		break;
		case '5': 
	
		elements =			 [["", "", "", "", "", "0"]
						, ["", "1", "", "", "1", ""]
						, ["", "", "", "0", "", ""]
						, ["", "", "1", "", "", ""]
						, ["", "", "1", "", "", ""]
						, ["", "0", "", "", "1", ""]];
		break;
		case '6': 
	
		elements =	[["1", "", "1", "", "", "1"]
					, ["", "", "", "1", "0", ""]
					, ["0", "", "", "1", "", ""]
					, ["", "", "1", "", "", ""]
					, ["", "1", "", "", "", ""]
					, ["1", "", "", "1", "1", ""]];
		break;
		case '7': 
elements =			[["", "1", "", "1", "", "1"],
["", "", "", "", "", ""],
["0", "0", "", "", "", ""],
["", "", "", "", "1", ""],
["0", "", "1", "0", "", ""],
["", "1", "", "", "", ""]]
break;
case '8':			
elements =	[["0", "", "", "", "", ""],
 ["", "1", "1", "", "", ""],
 ["", "", "1", "", "", ""],
 ["", "", "", "", "0", ""],
 ["0", "", "", "", "1", ""],
 ["", "", "", "", "", ""]]
break;	
case '9':
elements = [["", "", "", "1", "", ""],
 ["", "", "", "", "", "0"],
 ["", "", "", "", "0", "0"],
 ["", "", "", "", "1", ""],
 ["1", "", "", "", "", ""],
 ["", "0", "", "0", "", "0"]]
break;		
		default:
		elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
		
		
}
	if(check == true){
	submitElements();
	}

}






$(".block").click(function() {
	if(!this.classList.contains("prefab")){
	document.getElementById("tfText").innerHTML = "";
	var bttnClass = this.className;
	var col = bttnClass.charAt(6);
	var row = 	$(this).parent().attr("id").charAt(3);
	switch(this.innerHTML){	
		case '':
		this.innerHTML = '0';
		break;
		case '0':
		this.innerHTML = '1';
		break;
		case '1':
		this.innerHTML = '';
		break;
		default:
		alert('ooopss');

	}

}})

