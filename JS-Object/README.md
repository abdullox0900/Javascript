# JavaScript Object

Object Reference ma'lumot turiga kiruvchi Data Type hisoblanadi.

Obekt, ma'lumotlarni bizga tushunarliroq ko'rinishda saqlash imkonini beradi. Misol uchun biz biror avtomobilga oid obekt yaratishimiz va obektda shu avtoga tegishli barcha ma'lumotlarni saqlashmiz mumkin (nomi, rangi, yili, motori, narhi va hokazo). 

-JavaScript ob'ekti-bu nomlangan qiymatlar to'plami 🤔. 

-JavaScript ob'ekti ikki narsadan iborat bo‘ladi bu key va value.

Obektga misol 👇: 

```javascript

// Odam uchun obekt

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  img: null,
  hair: 'black',
  eyeColor: "blue"
};

// Moshina uchun obekt

const myCar = {
    name: 'BMW F90',
    year: 'August 2018',
    img: 'https://hips.hearstapps.com/hmg-prod/images/2020-bmw-m-mmp-1-1576531610.jpg?crop=0.888xw:1.00xh;0.0570xw,0&resize=768:*',
    color: 'Black',
    weight: '1,930 KG',
    cylinders: '8',
};
```

-Biz obektda bacha Data Type turlarini saqlashimiz mumkin.😎

```javascript
const user = {
    firstName: 'John',
    lastName: undefined,
    img: null,
    age: 18,
    location: 'Tashkent',
    lang: ['uz', 'ru', 'en'],
};
```

### Endi kelilar obektdan ma’lumotlarni olishni ko‘rib chiqamiz 😀.

```javascript
const user = {
    firstName: 'John',
    lastName: 'Doe',
    img: null,
    age: 18,
    location: 'Tashkent',
    lang: ['uz', 'ru', 'en'],
};

// elementlarni obektni ichidan  `.`  

console.log(user.firstName) // John
console.log(user.lastName) // Doe



// 
```

