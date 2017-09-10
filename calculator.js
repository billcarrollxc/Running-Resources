/*
* ToDo:
* original source: http://www.letsrun.com/forum/flat_read.php?thread=2959804
* source 1: https://drive.google.com/file/d/0B_zzkn1-wR0dYzkzM2U0ZjctMjE1NC00ZjI4LWI5YTgtMTRhY2NhYjBhZjQz/view
*/

// DO NOT DELETE!!!
// I don't know why yet, but these are essential for the program to work.
var thour = document.trainingPaces.thour.value;
var tmin = document.trainingPaces.tmin.value;
var tsec = document.trainingPaces.tsec.value;

// borrowed an modified from http://sstut.com/javascript/add-zeros-in-front-of-numbers-after-decimal-point.php
// This function will prepend a zero if there is only one digit to the right of the colon (e.g. 5:5 turns into 5:05).

function get2D(num) {
	if (
		num.toString().length < 2 // Integer of less than two digits
	)
		return "0" + num; // Prepend a zero!
	else {
		return num; // take no action
	}
}

function blankToZero() {
	// The totalTime() function can now reference those variables.
	// I originally declared the variables at the beginning of the script to give them global scope, but they loaded when the page loaded an did not update with onchange="totalTime();".
	
	thour = document.trainingPaces.thour.value;
	if (tmin === "") {
		thour = 0;
	}
	tmin = document.trainingPaces.tmin.value;
	if (tmin === "") {
		tmin = 0;
	}
	tsec = document.trainingPaces.tsec.value;
	if (tsec === "") {
		tsec = 0;
	}
}

function totalTime() {

	blankToZero(); // declares variables and turns the blank strings into values worth 0
	
	var totalTime = 3600 * thour + 60 * tmin + parseFloat(tsec);
	var dist = 1;
	var km = 1.609344;
	var quarter = 0.248548476894932;
	var actualPace = totalTime / 60;

	if (document.getElementById("event").value === "mile") {
		// calculates long-fast min/mi
		document.trainingPaces.longFastSpeed.value = "".concat(
			Math.floor(1.3 * totalTime / 60) +
				":" +
				get2D(
					Math.round((1.3 * totalTime / 60 - Math.floor(1.3 * totalTime / 60)) * 60)
				) +
				" -- " +
				(Math.floor(1.4 * totalTime / 60) +
					":" +
					get2D(Math.round((1.4 * totalTime / 60 - Math.floor(1.4 * totalTime / 60)) * 60)))
		);

		// calculates long-fast min/km
		document.trainingPaces.longFastKm.value = "".concat(
			Math.floor(1.3 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.3 * totalTime / 60 / km - Math.floor(1.3 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.4 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.4 * totalTime / 60 / km - Math.floor(1.4 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates long-fast s/400
		document.trainingPaces.longFast400.value = "".concat(
			Math.floor(1.3 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.3 * totalTime / 60 * quarter -
							Math.floor(1.3 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.4 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.4 * totalTime / 60 * quarter -
							Math.floor(1.4 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates fast-continous min/mi
		document.trainingPaces.fastContinuous.value = "".concat(
			Math.floor(1.17 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(1.17 * totalTime / 60 - Math.floor(1.17 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.19 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.19 * totalTime / 60 - Math.floor(1.19 * totalTime / 60)) * 60
					)))
		);

		// calculates fast-continous min/km
		document.trainingPaces.fastContinuousKm.value = "".concat(
			Math.floor(1.17 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.17 * totalTime / 60 / km - Math.floor(1.17 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.19 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.19 * totalTime / 60 / km - Math.floor(1.19 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates fast-continous s/400
		document.trainingPaces.fastContinuous400.value = "".concat(
			Math.floor(1.17 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.17 * totalTime / 60 * quarter -
							Math.floor(1.17 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.19 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.19 * totalTime / 60 * quarter -
							Math.floor(1.19 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates special min/mi
		document.trainingPaces.special.value = "".concat(
			Math.floor(0.9 * totalTime / 60) +
				":" +
				get2D(
					Math.round((0.9 * totalTime / 60 - Math.floor(0.9 * totalTime / 60)) * 60)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60) +
					":" +
					get2D(
						Math.round((1.065 * totalTime / 60 - Math.floor(1.065 * totalTime / 60)) * 60)
					))
		);

		// calculates special min/km
		document.trainingPaces.specialKm.value = "".concat(
			Math.floor(0.9 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.9 * totalTime / 60 / km - Math.floor(0.9 * totalTime / 60 / km)) * 60
					)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.065 * totalTime / 60 / km - Math.floor(1.065 * totalTime / 60 / km)) * 60
						)
					))
		);

		// calculates special s/400
		document.trainingPaces.special400.value = "".concat(
			Math.floor(0.9 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.9 * totalTime / 60 * quarter -
							Math.floor(0.9 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.065 * totalTime / 60 * quarter -
								Math.floor(1.065 * totalTime / 60 * quarter)) *
								60
						)
					))
		);

		// calculates specific min/mi
		document.trainingPaces.specific.value = "".concat(
			Math.floor(0.95 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 - Math.floor(0.95 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 - Math.floor(1.05 * totalTime / 60)) * 60
						)
					))
		);

		// calculates specific min/km
		document.trainingPaces.specificKm.value = "".concat(
			Math.floor(0.95 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 / km - Math.floor(0.95 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 / km - Math.floor(1.05 * totalTime / 60 / km)) *
								60
						)
					))
		);

		// calculates specific s/400
		document.trainingPaces.specific400.value = "".concat(
			Math.floor(0.95 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 * quarter -
							Math.floor(0.95 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 * quarter -
								Math.floor(1.05 * totalTime / 60 * quarter)) *
								60
						)
					))
		);
	} else if (document.getElementById("event").value === "5K") {
		// calculates long-fast min/mi
		document.trainingPaces.longFastSpeed.value = "".concat(
			Math.floor(1.15 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 - Math.floor(1.15 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 - Math.floor(1.25 * totalTime / 60)) * 60
					)))
		);

		// calculates long-fast min/km
		document.trainingPaces.longFastKm.value = "".concat(
			Math.floor(1.15 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 / km - Math.floor(1.15 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 / km - Math.floor(1.25 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates long-fast s/400
		document.trainingPaces.longFast400.value = "".concat(
			Math.floor(1.15 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 * quarter -
							Math.floor(1.15 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 * quarter -
							Math.floor(1.25 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates fast-continous min/mi
		document.trainingPaces.fastContinuous.value = "".concat(
			Math.floor(1.1 * totalTime / 60) +
				":" +
				get2D(
					Math.round((1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 - Math.floor(1.125 * totalTime / 60)) * 60
					)))
		);

		// calculates fast-continous min/km
		document.trainingPaces.fastContinuousKm.value = "".concat(
			Math.floor(1.1 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 / km - Math.floor(1.125 * totalTime / 60 / km)) *
							60
					)))
		);

		// calculates fast-continous s/400
		document.trainingPaces.fastContinuous400.value = "".concat(
			Math.floor(1.1 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 * quarter -
							Math.floor(1.1 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 * quarter -
							Math.floor(1.125 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates special min/mi
		document.trainingPaces.special.value = "".concat(
			Math.floor(0.9 * totalTime / 60) +
				":" +
				get2D(
					Math.round((0.9 * totalTime / 60 - Math.floor(0.9 * totalTime / 60)) * 60)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60) +
					":" +
					get2D(
						Math.round((1.065 * totalTime / 60 - Math.floor(1.065 * totalTime / 60)) * 60)
					))
		);

		// calculates special min/km
		document.trainingPaces.specialKm.value = "".concat(
			Math.floor(0.9 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.9 * totalTime / 60 / km - Math.floor(0.9 * totalTime / 60 / km)) * 60
					)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.065 * totalTime / 60 / km - Math.floor(1.065 * totalTime / 60 / km)) * 60
						)
					))
		);

		// calculates special s/400
		document.trainingPaces.special400.value = "".concat(
			Math.floor(0.9 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.9 * totalTime / 60 * quarter -
							Math.floor(0.9 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" and " +
				(Math.floor(1.065 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.065 * totalTime / 60 * quarter -
								Math.floor(1.065 * totalTime / 60 * quarter)) *
								60
						)
					))
		);

		// calculates specific min/mi
		document.trainingPaces.specific.value = "".concat(
			Math.floor(0.95 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 - Math.floor(0.95 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 - Math.floor(1.05 * totalTime / 60)) * 60
						)
					))
		);

		// calculates specific min/km
		document.trainingPaces.specificKm.value = "".concat(
			Math.floor(0.95 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 / km - Math.floor(0.95 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 / km - Math.floor(1.05 * totalTime / 60 / km)) *
								60
						)
					))
		);

		// calculates specific s/400
		document.trainingPaces.specific400.value = "".concat(
			Math.floor(0.95 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 * quarter -
							Math.floor(0.95 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 * quarter -
								Math.floor(1.05 * totalTime / 60 * quarter)) *
								60
						)
					))
			)	
	} else if (document.getElementById("event").value === "10K") {
		// calculates long-fast min/mi
		document.trainingPaces.longFastSpeed.value = "".concat(
			Math.floor(1.15 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 - Math.floor(1.15 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 - Math.floor(1.25 * totalTime / 60)) * 60
					)))
		);

		// calculates long-fast min/km
		document.trainingPaces.longFastKm.value = "".concat(
			Math.floor(1.15 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 / km - Math.floor(1.15 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 / km - Math.floor(1.25 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates long-fast s/400
		document.trainingPaces.longFast400.value = "".concat(
			Math.floor(1.15 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 * quarter -
							Math.floor(1.15 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 * quarter -
							Math.floor(1.25 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates fast-continous min/mi
		document.trainingPaces.fastContinuous.value = "".concat(
			Math.floor(1.1 * totalTime / 60) +
				":" +
				get2D(
					Math.round((1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 - Math.floor(1.125 * totalTime / 60)) * 60
					)))
		);

		// calculates fast-continous min/km
		document.trainingPaces.fastContinuousKm.value = "".concat(
			Math.floor(1.1 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 / km - Math.floor(1.125 * totalTime / 60 / km)) *
							60
					)))
		);

		// calculates fast-continous s/400
		document.trainingPaces.fastContinuous400.value = "".concat(
			Math.floor(1.1 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 * quarter -
							Math.floor(1.1 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.125 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.125 * totalTime / 60 * quarter -
							Math.floor(1.125 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates special min/mi
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special.value = "".concat(
			Math.floor(0.965 * totalTime / 60) +
				":" +
				get2D(
					Math.round((0.965 * totalTime / 60 - Math.floor(0.965 * totalTime / 60)) * 60)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60) +
					":" +
					get2D(
						Math.round((1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60)
					))
		);

		// calculates special min/km
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.specialKm.value = "".concat(
			Math.floor(0.965 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 / km - Math.floor(0.965 * totalTime / 60 / km)) * 60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
						)
					))
		);

		// calculates special s/400
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special400.value = "".concat(
			Math.floor(0.965 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 * quarter -
							Math.floor(0.965 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 * quarter -
								Math.floor(1.1 * totalTime / 60 * quarter)) *
								60
						)
					))
		);

		// calculates specific min/mi
		document.trainingPaces.specific.value = "".concat(
			Math.floor(0.95 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 - Math.floor(0.95 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 - Math.floor(1.05 * totalTime / 60)) * 60
						)
					))
		);

		// calculates specific min/km
		document.trainingPaces.specificKm.value = "".concat(
			Math.floor(0.95 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 / km - Math.floor(0.95 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 / km - Math.floor(1.05 * totalTime / 60 / km)) *
								60
						)
					))
		);

		// calculates specific s/400
		document.trainingPaces.specific400.value = "".concat(
			Math.floor(0.95 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 * quarter -
							Math.floor(0.95 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 * quarter -
								Math.floor(1.05 * totalTime / 60 * quarter)) *
								60
						)
					))
			)	
	} else if (document.getElementById("event").value === "half") {
		// calculates long-fast min/mi
		document.trainingPaces.longFastSpeed.value = "".concat(
			Math.floor(1.15 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 - Math.floor(1.15 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 - Math.floor(1.25 * totalTime / 60)) * 60
					)))
		);

		// calculates long-fast min/km
		document.trainingPaces.longFastKm.value = "".concat(
			Math.floor(1.15 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 / km - Math.floor(1.15 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 / km - Math.floor(1.25 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates long-fast s/400
		document.trainingPaces.longFast400.value = "".concat(
			Math.floor(1.15 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.15 * totalTime / 60 * quarter -
							Math.floor(1.15 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.25 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.25 * totalTime / 60 * quarter -
							Math.floor(1.25 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates fast-continous min/mi
		document.trainingPaces.fastContinuous.value = "".concat(
			Math.floor(1.045 * totalTime / 60) +
				":" +
				get2D(
					Math.round((1.045 * totalTime / 60 - Math.floor(1.045 * totalTime / 60)) * 60)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 - Math.floor(1.065 * totalTime / 60)) * 60
					)))
		);

		// calculates fast-continous min/km
		document.trainingPaces.fastContinuousKm.value = "".concat(
			Math.floor(1.045 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.045 * totalTime / 60 / km - Math.floor(1.045 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 / km - Math.floor(1.065 * totalTime / 60 / km)) *
							60
					)))
		);

		// calculates fast-continous s/400
		document.trainingPaces.fastContinuous400.value = "".concat(
			Math.floor(1.045 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.045 * totalTime / 60 * quarter -
							Math.floor(1.045 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 * quarter -
							Math.floor(1.065 * totalTime / 60 * quarter)) *
							60
					)))
		);
	
		// calculates special min/mi
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special.value = "".concat(
			Math.floor(0.965 * totalTime / 60) +
				":" +
				get2D(
					Math.round((0.965 * totalTime / 60 - Math.floor(0.965 * totalTime / 60)) * 60)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60) +
					":" +
					get2D(
						Math.round((1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60)
					))
		);

		// calculates special min/km
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.specialKm.value = "".concat(
			Math.floor(0.965 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 / km - Math.floor(0.965 * totalTime / 60 / km)) * 60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
						)
					))
		);

		// calculates special s/400
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special400.value = "".concat(
			Math.floor(0.965 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 * quarter -
							Math.floor(0.965 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 * quarter -
								Math.floor(1.1 * totalTime / 60 * quarter)) *
								60
						)
					))
		);

		// calculates specific min/mi
		document.trainingPaces.specific.value = "".concat(
			Math.floor(0.95 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 - Math.floor(0.95 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 - Math.floor(1.05 * totalTime / 60)) * 60
						)
					))
		);

		// calculates specific min/km
		document.trainingPaces.specificKm.value = "".concat(
			Math.floor(0.95 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 / km - Math.floor(0.95 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 / km - Math.floor(1.05 * totalTime / 60 / km)) *
								60
						)
					))
		);

		// calculates specific s/400
		document.trainingPaces.specific400.value = "".concat(
			Math.floor(0.95 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 * quarter -
							Math.floor(0.95 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 * quarter -
								Math.floor(1.05 * totalTime / 60 * quarter)) *
								60
						)
					))
		);
	} else if (document.getElementById("event").value === "full") {
		// calculates long-fast min/mi
		document.trainingPaces.longFastSpeed.value = "".concat(
			Math.floor(1.1 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.2 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.2 * totalTime / 60 - Math.floor(1.2 * totalTime / 60)) * 60
					)))
		);

		// calculates long-fast min/km
		document.trainingPaces.longFastKm.value = "".concat(
			Math.floor(1.1 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.2 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.2 * totalTime / 60 / km - Math.floor(1.2 * totalTime / 60 / km)) * 60
					)))
		);

		// calculates long-fast s/400
		document.trainingPaces.longFast400.value = "".concat(
			Math.floor(1.1 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.1 * totalTime / 60 * quarter -
							Math.floor(1.1 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.2 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.2 * totalTime / 60 * quarter -
							Math.floor(1.2 * totalTime / 60 * quarter)) *
							60
					)))
		);

		// calculates fast-continous min/mi
		document.trainingPaces.fastContinuous.value = "".concat(
			Math.floor(1.045 * totalTime / 60) +
				":" +
				get2D(
					Math.round((1.045 * totalTime / 60 - Math.floor(1.045 * totalTime / 60)) * 60)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 - Math.floor(1.065 * totalTime / 60)) * 60
					)))
		);

		// calculates fast-continous min/km
		document.trainingPaces.fastContinuousKm.value = "".concat(
			Math.floor(1.045 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(1.045 * totalTime / 60 / km - Math.floor(1.045 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60 / km) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 / km - Math.floor(1.065 * totalTime / 60 / km)) *
							60
					)))
		);

		// calculates fast-continous s/400
		document.trainingPaces.fastContinuous400.value = "".concat(
			Math.floor(1.045 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(1.045 * totalTime / 60 * quarter -
							Math.floor(1.045 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.065 * totalTime / 60 * quarter) +
					":" +
					get2D(Math.round(
						(1.065 * totalTime / 60 * quarter -
							Math.floor(1.065 * totalTime / 60 * quarter)) *
							60
					)))
		);
	
		// calculates special min/mi
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special.value = "".concat(
			Math.floor(0.965 * totalTime / 60) +
				":" +
				get2D(
					Math.round((0.965 * totalTime / 60 - Math.floor(0.965 * totalTime / 60)) * 60)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60) +
					":" +
					get2D(
						Math.round((1.1 * totalTime / 60 - Math.floor(1.1 * totalTime / 60)) * 60)
					))
		);

		// calculates special min/km
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.specialKm.value = "".concat(
			Math.floor(0.965 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 / km - Math.floor(0.965 * totalTime / 60 / km)) * 60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 / km - Math.floor(1.1 * totalTime / 60 / km)) * 60
						)
					))
		);

		// calculates special s/400
		// "The long-distance (10km and up) specialists work at speeds of 102-105% of race pace for their high-speed interval workouts."
		document.trainingPaces.special400.value = "".concat(
			Math.floor(0.965 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.965 * totalTime / 60 * quarter -
							Math.floor(0.965 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" and " +
				(Math.floor(1.1 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.1 * totalTime / 60 * quarter -
								Math.floor(1.1 * totalTime / 60 * quarter)) *
								60
						)
					))
		);

		// calculates specific min/mi
		document.trainingPaces.specific.value = "".concat(
			Math.floor(0.95 * totalTime / 60) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 - Math.floor(0.95 * totalTime / 60)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 - Math.floor(1.05 * totalTime / 60)) * 60
						)
					))
		);

		// calculates specific min/km
		document.trainingPaces.specificKm.value = "".concat(
			Math.floor(0.95 * totalTime / 60 / km) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 / km - Math.floor(0.95 * totalTime / 60 / km)) * 60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 / km) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 / km - Math.floor(1.05 * totalTime / 60 / km)) *
								60
						)
					))
		);

		// calculates specific s/400
		document.trainingPaces.specific400.value = "".concat(
			Math.floor(0.95 * totalTime / 60 * quarter) +
				":" +
				get2D(
					Math.round(
						(0.95 * totalTime / 60 * quarter -
							Math.floor(0.95 * totalTime / 60 * quarter)) *
							60
					)
				) +
				" -- " +
				(Math.floor(1.05 * totalTime / 60 * quarter) +
					":" +
					get2D(
						Math.round(
							(1.05 * totalTime / 60 * quarter -
								Math.floor(1.05 * totalTime / 60 * quarter)) *
								60
						)
					))
		);
	}
}

function pacePercentages() {
	var trainingSec = (60*(document.pacePercentages.trainingPaceMin)) + document.pacePercentages.trainingPaceSec;
	var raceSec = (60*(document.pacePercentages.racePaceMin)) + document.pacePercentages.racePaceSec;
	var percent = trainingSec/raceSec;
	
	if (percent > 1) {
		percent = 100*(2 - percent);
	} else if (percent < 1) {
		percent = 100*(1+(1 - percent));
	}
	
	document.pacePercentages.percentage.value = "".concat(percent.toFixed(1) + "%");

}
