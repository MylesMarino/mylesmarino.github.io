// getWeek
	// currentDate = new Date();
	// startDate = new Date(currentDate.getFullYear(), 0, 2);
	// var days = Math.floor((currentDate - startDate) /
	// 	(24 * 60 * 60 * 1000)) ;
	// var weekNumber = Math.floor(days / 7);
	// var weekEven = weekNumber % 2 == 0 ? true : false

	const date = new Date();
	const numDate = date.getDate();
	const numDay = date.getDay();
	date.setDate(numDate - numDay);
	const weekNum = Math.floor(date.getDate() / 7);

// select elements
	const left = document.getElementById("left");
	const right = document.getElementById("right");

// output
	weekEven == true ? right.style.backgroundColor = "white" : left.style.backgroundColor = "white"