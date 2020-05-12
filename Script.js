// JavaScript source code

var elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];



function clearElements(){

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
			document.getElementsByClassName("block_" + j)[i].innerHTML = '';
			
		}	
	}
}



function submitElements(){

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			document.getElementsByClassName("block_" + j)[i].innerHTML = elements[i][j];
			
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

});
	