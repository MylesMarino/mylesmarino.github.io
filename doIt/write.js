function previewEmail(){
	name = document.getElementById("name").value;
	goal = document.getElementById("goal").value;
	when = document.getElementById("when").value;
	punishment = document.getElementById("punishment").value;

	document.getElementById("previewIntro").innerHTML = "Friends, I want you to hold me accountable. My goal: " + goal;
	document.getElementById("previewWhen").innerHTML = "I have until " + when; 
	document.getElementById("previewPunishment").innerHTML = "If I do not complete my goal, I will send a recording of me " + punishment;
	document.getElementById("previewCheers").innerHTML = name;
}
