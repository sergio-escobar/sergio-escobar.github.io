// Your Code Here!
$("#container").submit(function(e){
	e.preventDefault();
	var picture= document.getElementById("link").value
	var summary= document.getElementById("caption").value

	addNewItem(picture, summary)

	document.getElementById("link").value=" "
	document.getElementById("caption").value=" "

});

function addNewItem(picture, summary){
	var npost= document.createElement("div");
	npost.classList.add("npost");

	var newimg= document.createElement("img");
	newimg.src= picture;
	npost.appendChild(newimg)

	var newcap= document.createElement("p");
	newcap.innerHTML= summary;
	npost.appendChild(newcap);

	var r= document.createElement("div");
	r.innerHTML="x";
	r.classList.add("xvalue");
	r.style.right="5px";
	r.style.top="5px";

	r.addEventListener('click',function(){
		var npostid= String(Math.random())
		npost.id= npostid
		document.getElementById(npostid).remove()
});

	npost.appendChild(r)
	document.getElementById("random").appendChild(npost)

};