function checkInput () {
    
    let name = document.getElementById ('userName');
    let age = document.getElementById ('userAge');
    let phone = document.getElementById ('userPhone');
    let email = document.getElementById ('userEmail');
    let password = document.getElementById ('userPassword');

    document.getElementById ('errorMessage').innerHTML = '';

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML+= 'Ваше ФИО не заполнено <br>'; 
    }

    if (age.value < 6 || age.value > 100) {
        document.getElementById('errorMessage').innerHTML+= 'Укажите возраст! <br>'; 
    }

    if (phone.value == '') {
        document.getElementById('errorMessage').innerHTML+= 'Заполните поле Телефон <br>'; 
    }

    if (phone.value.match(/\D/)) {
        document.getElementById('errorMessage').innerHTML+= 'Телефон может содержать только цифры! <br>'; 
    }

    if (phone.value.length<=10) {
        document.getElementById('errorMessage').innerHTML+= 'Номер телефона введен неверно <br>'; 
    }

    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML+= 'Ваш email не заполнен <br>'; 
    }

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML+= 'Введите пароль! <br>'; 
    }

    if (password.value.length <= 5) {
        document.getElementById('errorMessage').innerHTML+= 'Пароль слишком короткий, введите не менее 5 знаков! <br>'; 
    }
}
