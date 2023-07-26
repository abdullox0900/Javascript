let a = [1,2];
let b = [12];

// console.log(isNaN(a));
// console.log(isNaN(b));

// isNaN qande tekshiradi raqam bolsa false qaytaradi raqam bolmasa true

// console.log(typeof 3*5);
// console.log((typeof 3)*5);

// let e = []

// console.log(e.toString()); // console.logga nima chiqadi

// necha usulda objetdan clon olsa boladi

// brinchisi bu Object.assign() object metodi orqali buni bir muamosi bor

// ikkinchi usuli bu JSON.parse(JSON.stringify()) Json parse kilish orqali

// uchunchi usuli bu structuredClone() bu eng yaxshi usul deb oyleman


// console.log(NaN == NaN); nima false chiqadi ? chunki NaN bu raqam emas degani raqam emasga ==lasa raqam easni bu false boladi

// == tenglikda false chiqadigon bolsa === tenglida xam false boladi

// console.log('true' === 'true');

// console.log(isNaN('kjnk')); // true

console.log(Number.isNaN('sdsa'));

let al = 'Alisher';

let l = console.log;

l(al)

function numIs(n) {

    let result = ''

     if(typeof n == "number") {
        result = 'Raqam'
    } else {
        result = 'Raqam emas';
    }
    return result
}

console.log(numIs('dsds'));

let on = {name: 'ali'}

l(on.hasOwn)
