# Array 

Massiv-bu bir nechta qiymatga ega bo'lgan maxsus o'zgaruvchi:

Bitta o'zgaruvchida bir nechta qiymatlarni saqlash imkonini beradi. Bu qiymatlar Array elementlari deyiladi. Ro'yxatda son, matn yoki aralash turdagi elementlarni saqlash mumkin. 


## Array ro'yxat yaratish

Array quyidagicha yaratiladi:

```javascript
let arr = new Array();
let arr = [];
```

Biz arrayni 2 xil usulda yaratishimiz mumkin ekan. biz ko‘pincha 2 kinchi usuldan foydalanamiz. bu [] 

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

Arrayni ichidagi elementlar 0 dan boshlab sanaladi.
deme biz 'Banana' qiymatini olish uchun 1ga murojaat qilamiz

Biz elementni kvadrat qavs ichida uning raqamini ko'rsatish orqali olishimiz mumkin:

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```

Elementni almashtirishimiz mumkin

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

fruits[2] = 'Kiwi'

console.log(fruits); 
```

Result: `["Apple", "Banana", "Kiwi"]`

Yoki biz yangi element xam ko‘shishimiz mumkin arraymizga.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

fruits[3] = 'Kiwi'

console.log(fruits); 
```
Result: `["Apple", "Banana", "Cherry", "Kiwi"]`

Array uzunligini bilmoqchi bo‘lsak lenght xususiyatidan foydalanamiz.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits.length) // length xususiyati yoki (свойстваси) bizga array ichida nechta element borligini qaytaradi (3)
```

Result: `3`

`length` xususiyati bizga qaytargan natija numberda bo‘ladi

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(typeof (fruits.length)) 
```

Result: `number`

Biz arrayga har qanday turdagi elementlar saqlanishi mumkin.

```javascript
let my_arr = [1, 2.3, '45', true, undefined, null, {name: 'abdulloh'}, function() {alert("Hi, I'm alert")}]
```

Array ichida elementlarni `,` "Osilgan vergul" ajratib yozamiz, agar tushunmagan bo‘lsangiz 😁. pastda misolga karrang. 

```javascript
let cars = [
    'BMW',
    'Mercades',
    'Chevrolet', // <-- mana shu vergul bilan ajratib yozamiza bola
    'Volvo'
]
```

