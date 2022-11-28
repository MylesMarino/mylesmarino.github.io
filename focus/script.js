// getWeek
	let currentDate = new Date();
	let startDate = new Date(2022,0,2);

	let dayDifference = Math.floor(currentDate - startDate)/(1000*60*60*24);
	let weekNum = Math.ceil((dayDifference)/7);

// output
	weekNum % 2 != 0 ? document.getElementById("whatWeek").innerHTML = "Code." : document.getElementById("whatWeek").innerHTML = "Invest."