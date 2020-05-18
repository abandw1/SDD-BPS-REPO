// JavaScript source code

var elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];



function clearElements(){

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



function submitElements(){

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			var currentBlock = document.getElementsByClassName("block_" + j)[i];
			if(elements[i][j] != ""){
			currentBlock.classList.add("prefab");
			}
			currentBlock.innerHTML = elements[i][j];
			
			
		}	
	}
}







function solveGrid(){
	
	
	
	




	
}

function gameSet(){
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

}});
	