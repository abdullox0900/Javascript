// let num_1 = 1;
// let num_2 = 2;
// let num_3 = 3;
// let num_4 = 4;

// if (num_1 == 1) {
//     console.log('Bu 1 raqami');
// } else if (num_2 == 2) {
//     console.log('Bu 2 raqami');
// } else if (num_3 == 3) {
//     console.log('Bu 3 raqami');
// } else if (num_4 == 4) {
//     console.log('Bu 4 raqami');
// } else {
//     console.log('Bunday raqam topilmadi');
// }

// <<========== Input validator ==========>>

const elInput = document.getElementById('input');
const elResult = document.getElementById('result');

function inputValidator() {
    if (elInput.value == '' || elInput.value == ' ') {
        elResult.textContent = 'Bu bosh mant iltimos mant kiriting'
    } else if(Number(elInput.value)) {
        elResult.textContent = 'Bu raqam ekan iltimos matn kiriting'
    } else {
        elResult.textContent = elInput.value
    }
}