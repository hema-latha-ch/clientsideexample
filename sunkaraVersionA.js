'use strict'
// created by sunkara Hema
var object = {name: "sunkaraHema",ID: 700699488}
window.addEventListener("load",function()
{
	var selectItem = document.getElementById("makeAWishButton").addEventListener("click",selectDropDown,false);
	var display = document.getElementById("displayCreditsButton").addEventListener("click",function()
	{
		object.name;
		object.ID;
		document.getElementById("resultPara1").innerHTML = object.name;
		document.getElementById("resultPara").innerHTML = object.ID;
	}
	,false);
}
,false);

function selectDropDown()
{

	var selectItem = document.getElementById("dropDownList").value;
	//creating array 
    var myArray= ["to Movies", "Shopping","to a Restaurant"];
		var result = (Math.random(myArray[0],myArray[1],myArray[2]));
		// comparing array elements with selected item
		if(result == selectItem)
		{
			document.getElementById("resultPara").innerHTML = "Wish Granted. You will be going to Movies and make merry this weekend";
		}// end of if statement
		else
		{
			document.getElementById("resultPara").innerHTML = "OOOOPSee! One proposes and the significant other disposes! Wish not Granted. Be nice and try harder next time";
		}// end of else statement
	

}// end of selectDropDown function

