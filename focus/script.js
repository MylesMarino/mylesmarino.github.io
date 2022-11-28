// getWeek
	let startDate = new Date("01/01/2022");
	let currentDate = new Date();

	let millisecondDifference = startDate.getTime() - currentDate.getTime();
	let totalDays = Math.ceil(millisecondDifference/(-1000*3600*24));
	let weekNum = Math.floor(totalDays/7);

	console.log(startDate)
	console.log(currentDate)

// output
	weekNum % 2 != 0 ? document.getElementById("whatWeek").innerHTML = "Code." : document.getElementById("whatWeek").innerHTML = "Invest."