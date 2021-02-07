/*****************

	Coding Challenge #5
	Name: 

	Purpose: recreate the effects used on CSSZenGarden

*****************/

document.addEventListener("DOMContentLoaded", function(){

	//	Grab the link element and the two anchor elements from the markup

	// 	For the anchor elements, add event listeners to handle the click events
	//	When clicked, the link element's href attribute should be changed accordingly
	document.getElementById("style1").addEventListener("click",function(){
	document.getElementById("stylesheet").setAttribute("href","A2_Mai-Nguyen-Anh-Thu_ver.css");
	});
	document.getElementById("style2").addEventListener("click", function(){
	document.getElementById("stylesheet").setAttribute("href","A2_Mai-Nguyen-Anh-Thu_hor.css")
	});

});