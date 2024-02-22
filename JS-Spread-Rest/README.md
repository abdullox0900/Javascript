# SPREAD VA REST

## Spread Operator.

JavaScript `SPREAD` operatori (...) mavjud massiv yoki ob'ektning to'liq yoki bir qismini boshqa massiv yoki ob'ektga tezda nusxalash imkonini beradi.

Masalan: Array misolida

```javascript
const numberOne = [1,2,3,4];
const numberTwo = [5,6,7,8];

console.log(...numberOne, ...numberTwo);
```

Result: `[1, 2, 3, 4, 5, 6, 7, 8]`


Masalan: Object misolida

```javascript
const user = {
    name: "Abdulloh",
    year: 2003,
}

const userUpdate = {
    lastName: "Abdusalomov",
    age: 21,
}

const newUserObj = {...user, ...userUpdate} // Muhim joyi bu bizga yangi obyekt qaytaradi

console.log(newUserObj);
```

Result: `{name: "Abdulloh", year: 2003, lastName: "Abdusalomov", age: 21}`

Agar biz ikki obyektni birlash tarmoqchi bo‘lsak jingalak `{}` qavs ichida ishlatishimiz kerak.

```javascript
{...oneObj, ...twoObj}
```


### Example-1


```javascript
const array = [1, 2, 3];

const obj = { ...array };

console.log(obj);
console.log(typeof obj);
```

Result: `{ '0': 1, '1': 2, '2': 3 }`
Result: `Object`


### Example-2


```javascript
let scores = [12, 33, 6];

const addAll = (a, b, c) => {
    console.log(a + b + c);
};

addAll(...scores);
```

Result: `51`


### Example-3


```javascript
let myStr = 'Abdulloh'

console.log(...myStr);
```

Result: `A b d u l l o h`


### Example-3


```javascript
let myStr = 'Abdulloh'

console.log([...myStr]);
```

Result: `['A', 'b', 'd', 'u', 'l', 'l', 'o', 'h']`


### Example-4


```javascript
let myStr = 'Abdulloh'

console.log({...myStr});
```

Result: `{'0': 'A', '1': 'b', '2': 'd', '3': 'u', '4': 'l', '5': 'l', '6': 'o', '7': 'h'}`


## REST

Spread operatori elementlarni tarqatishga e'tibor qaratsa, rest operatori JavaScript ishlab chiquvchilariga istalgan sonli argumentlarni massivga to'plashga imkon beradi. Ushbu operator funktsiyadagi bir nechta argumentlarni qabul qilishni va ular ustida birgalikda operatsiyalarni bajarishni xohlaganingizda foydalidir. Keling, rest operatorini va uning amaliy qo'llanmalarini o'rganamiz.

```javascript
const multiplyArgs = (multiplier, ...otherArgs) => {
    return otherArgs.map((number) => {
        return number * multiplier;
    });
};

let multipliedArray = multiplyArgs(6, 5, 7, 9);
console.log(multipliedArray); // [30, 42, 54]
```

Function parametrida rest operatorini ishlatgan bo‘lsangiz va undan kegin parametir bera olmaymiz bizga xatolik qaytaradi.

```javascript
const multiplyArgs = (multiplier, ...otherArgs, lastNumber) => {
    console.log(lastNumber); // Uncaught SyntaxError: Rest parameter must be last formal parameter
};

multiplyArgs(6, 5, 7, 9);
```

`REST` operator function parametrida ishlatamiz `SPREAD` operatorini esa nusxalash uchun
xa rest xam nusxalaydi unda farqi nimada ishlanish joyida funtion kelsa `REST` diyladi`

Foydali linklar 

 - [YuoTube SPREAD and REST ru](https://www.youtube.com/watch?v=SGeQ-U0G7dE&t=909s)
 - [YuoTube SPREAD and REST ru](https://www.youtube.com/watch?v=HkQ--STLf2Q&t=613s)
 - [Medium](https://cleverzone.medium.com/demystifying-javascript-spread-operat-71924c888a8)
 