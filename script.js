
document.querySelector('.btn_inputNum').addEventListener('click', () => {
	let data = document.querySelector('#inputNum').value;
	innerPerfectNum(+data)
});

function innerPerfectNum(numb) {

	if (checkPerfectNum(numb)) {
		document.querySelector('.output').innerHTML = "Perfect Number";
	} else {
		document.querySelector('.output').innerHTML = "It's not a Perfect Number";
	}
}

function checkPerfectNum(num) {
	let sum = 0;
	if (num <= 0) {
		document.querySelector('.output').innerHTML = "It's not a Perfect Number";
	}

	for (let i = 1; i <= num / 2; i++) {
		if (num % i == 0) {
			sum += i;
		}
	}
	return sum === num && sum !== 0
}


const startNumInput = document.querySelector('#inputStartNum');
const endNumInput = document.querySelector('#inputEndNum');
let perfectNumBtn = document.querySelector('.btn_perfectNum');

perfectNumBtn.onclick = function () {
	checkPerfectNums(+startNumInput.value, +endNumInput.value);
}

function checkPerfectNums(num1, num2) {
	const perfectNumbers = [];
	for (let j = num1; j < num2; j++) {
		if (checkPerfectNum(j)) {
			perfectNumbers.push(j)
		}
	}

	if (perfectNumbers.length > 0) {
		document.querySelector('#answer').innerHTML = perfectNumbers;
	} else {
		document.querySelector('#answer').innerHTML = "It's not a Perfect Numbers";
	}
}


