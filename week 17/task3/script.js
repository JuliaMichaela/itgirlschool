let btnFirst = document.querySelector(".date__btn_first");
let btnSecond = document.querySelector(".date__btn_second");
let btnThird = document.querySelector(".date__btn_third");
let btnFourth = document.querySelector(".date__btn_fourth");

btnFirst.onclick = function () {
    alert(formatDate(new Date(new Date - 1)));
}

btnSecond.onclick = function () {
    alert(formatDate(new Date(new Date - 30 * 1000)));
}

btnThird.onclick = function () {
    alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
}

btnFourth.onclick = function () {
    alert(formatDate(new Date(new Date - 86400 * 1 * 1000)));
}

function formatDate(date) {

    date = new Date(date);
    let now = new Date;
    let diff = now - date;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    month = month < 10 ? `0${month}` : month;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    if (diff < 1000 * 60) {
        return `${Math.round(diff / 1000)} сек. назад`;
    }

    if (diff < 1000 * 3600) {
        return `${Math.round(diff / 1000 / 60)} мин. назад`;
    }

    return `${day}.${month}.${year} ${hour}:${minutes}`
}