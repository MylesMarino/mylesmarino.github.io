// getWeek
	currentDate = new Date();
	startDate = new Date(currentDate.getFullYear(), 0, 1);
	var days = Math.floor((currentDate - startDate) /
		(24 * 60 * 60 * 1000));
	var weekNumber = Math.floor(days / 7);
	var weekEven = weekNumber % 2 == 0 ? true : false

// select elements
	const left = document.getElementById("left");
	const right = document.getElementById("right");

// output
	weekEven == true ? right.style.backgroundColor = "white" : life.style.backgroundColor = "white"