const btn = document.querySelector('.btn');

let errors = [];

function checkValidity(input) {
	if (input.validity.valueMissing) {
		errors.push('Поле ' + input.placeholder + ' не заполнено');
	}

	if (input.validity.patternMismatch) {
		errors.push('Неверный формат заполнения');
	}

	if (input.validity.tooShort) {
		errors.push('Пароль должен быть больше 5 символов');
	}

	if (input.validity.tooLong) {
		errors.push('Пароль должен быть не больше 12 символов');
	}
}

function checkAllInputs() {
	errors = [];
	let inputs = document.querySelectorAll('input');
	let input = document.querySelector('input');

	for (input of inputs) {
		checkValidity(input);
	}

	document.getElementById('result').innerHTML = errors.join('. </br>');
}

btn.addEventListener('click', checkAllInputs);
