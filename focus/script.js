// getWeek
	let currentDate = new Date();
	let startDate = new Date(currentDate.getFullYear(),0,1);

	let dayDifference = Math.floor(currentDate - startDate)/(1000*60*60*24);
	let weekNum = Math.ceil((dayDifference)/7);
	console.log(weekNum)

// output
	weekNum % 2 != 0 ? document.getElementById("whatWeek").innerHTML = "Code." : document.getElementById("whatWeek").innerHTML = "Invest."