(() => {
	/* this is same as print() in python.
	console.logo is the same as print */
	console.log('loaded!')

	//same as an arry in python
	var choices = ["Rock", "Paper", "Scissors"]
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector('.winlose');

	function play_game() {
		console.log("called game function")
		// generate a random number and use that to pick a weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choices = player.value;
		console.log(player_choices);

		if (computer.toLowerCase() == player_choices.toLowerCase()) {
			//tie
			console.log('tie');
	}

	else if (player_choices.toLowerCase() == "rock") {
		if (computer.toLowerCase() == "scissors") {
			console.log('win');
		} else {
			console.log("lose");
		}
	}

	else if (player_choices.toLowerCase() == "paper") {
		if (computer.toLowerCase() == "rock") {
			console.log('win');
		} else {
			console.log("lose");
		}
	}

	else if (player_choices.toLowerCase() == "scissors") {
		if (computer.toLowerCase() == "paper") {
			console.log('win');
		} else {
			console.log("lose");
		}
	}
}

	trigger.addEventListener("click", play_game);
})();