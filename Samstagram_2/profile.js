// Your Code Here!

$("#prof_form").submit(function(e){
	e.preventDefault();
	var acname=document.getElementById("ninput").value;
	var imgv= document.getElementById("img").value;
	var biov= document.getElementById("binput").value;
	var subv= document.getElementById("submit").value;

		document.getElementById("name").innerHTML= document.getElementById("ninput").value;
		document.getElementById("image").src= document.getElementById("img").value;
		document.getElementById("bio").innerHTML= document.getElementById("binput").value;

});