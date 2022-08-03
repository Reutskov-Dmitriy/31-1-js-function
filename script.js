const startNumInput = document.querySelector('#inputStartNum');
const endNumInput = document.querySelector('#inputEndNum');
let perfectNumBtn = document.querySelector('.btn_perfectNum');

perfectNumBtn.onclick = function () {
	const numPerfect = checkPerfectNum(startNumInput.value, endNumInput.value);
}

function checkPerfectNum(num1, num2) {
	console.log(num1)
	console.log(num2)
	let perfectNumbers = 0
	for (let j = num1; j < num2; j++) {

		let sum = 0;
		for (let i = 1; i < j; i++) {

			if (j % i == 0) {
				sum += i;
				if (+j === sum) {
					perfectNumbers = `${sum}`;
				}
			}
		}
	}
	console.log(perfectNumbers);

	if (perfectNumbers !== 0) {
		document.querySelector('#answer').innerHTML = perfectNumbers;
	} else {
		document.querySelector('#answer').innerHTML = "It's not a Perfect Number";
	}
}


