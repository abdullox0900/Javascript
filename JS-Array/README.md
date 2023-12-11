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

