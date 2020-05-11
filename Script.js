// JavaScript source code

var elements = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];

function clearElements(){

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			document.getElementsByClassName("block_" + j)[i].innerHTML = '';
			
		}	
	}
}

function submitElements(){
	var count = 0;
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {

			elements[i][j] = document.getElementsByClassName("block_" + j)[i].innerHTML;

		}
	}

}


function solveGrid(){
	
	
	
	




	
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
	