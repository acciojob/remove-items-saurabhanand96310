//your JS code here. If required.
let colorSelect= document.getElementById("colorSelect");
let inputVal=document.getElementById("input");

inputVal.addEventListener("click", (e)=>{
	colorSelect.remove(colorSelect.selectedIndex)
})