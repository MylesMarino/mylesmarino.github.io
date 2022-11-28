// getWeek
	const date = new Date();
	const numDate = date.getDate();
	var numDay = date.getDay();
	date.setDate(numDate - numDay + 1);
	const weekNum = Math.floor(date.getDate() / 7);

// select elements
	const left = document.getElementById("left");
	const right = document.getElementById("right");

// output
	weekNum % 2 != 0 ? right.style.backgroundColor = "white" : left.style.backgroundColor = "white"