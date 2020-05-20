
// JavaScript source code

var elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];

var puzElem = [[]];



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
	
	if(bolCheck){
	document.getElementById("tfText").innerHTML = "Incorrect";
	}else{
	document.getElementById("tfText").innerHTML = "Please fill in all squares.";
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
}




function loadGrid(download, prefabOnly){

	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				
				if(download){
				var tempElement = document.getElementsByClassName("block_" + j)[i];
				if(prefabOnly == true && !tempElement.classList.contains("prefab")){
					elements[i][j] = ""
				}else{
					elements[i][j] = tempElement.innerHTML;
				}}else{
					document.getElementsByClassName("block_" + j)[i].innerHTML = elements[i][j];
				}
			}
	

}
}


function solveGrid(){
	var run = true;
	var num = null
	loadGrid(true,true);
	while(run == true){
	run = false;	
	var newelem = elements;
	var preelems = elements;
	for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				if(elements[i][j] == "" && document.getElementsByClassName("block_" + j)[i].innerHTML == ""){
				num = rowPairs(j,i);
				if(num == null){
					num = colPairs(j,i);
					if(num == null){
						num = trios(j,i);
						
						
						if(num == null){
							num = complete(j,i);
							if(num == null){
								num = "";
								
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
	}
	elements = newelem;

	}
	
	loadGrid(false,false);
	
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

	
function complete(col,row){
	var zeroCount = 0;
	var oneCount = 0;
	//Collumns first.
	for(var m = 0; m < 5; m++){
		if(elements[row][m] == "0"){
			zeroCount++;
		}
		if(elements[row][m] == "1"){
			oneCount++;
		}
	}
	if(zeroCount == 3){
		return "0";
	}else if(oneCount == 3){
		return "1";
	}else{
		//Then rows.
		for(m = 0; m < 5; m++){
		if(elements[m][col] == "0"){
			zeroCount++;
		}
		if(elements[m][col] == "1"){
			oneCount++;
		}
		}
		if(zeroCount == 3){
		return "0";
		}else if(oneCount == 3){
		return "1";
		}else{
			return null
		}
		}
		
}
	
	
function gameSet(){
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
		default:
		elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
		
		
}
	submitElements();

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

