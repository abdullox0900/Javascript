// Html select
const elNum = document.querySelector('.num');
const elPlus = document.querySelector('.plus');
const elMinus = document.querySelector('.minus');

let n = 1

elPlus.addEventListener('click', () => {
    n++
    n = (n < 10) ? ('0' + n) : n

    elNum.textContent = n
})

elMinus.addEventListener('click', () => {
    n--
    n =( n == -1) ? '00' : (n < 10) ? ('0' + n) : n

    elNum.textContent = n
})