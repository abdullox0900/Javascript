# JavaScript If-else statement

Ba'zan biz shartlarga qarab turli xil harakatlarni bajarishimiz kerak boladi dastur tuzish davomida.

Buning uchun if operatoridan foydalanishimiz mumkin

If(...) shartni qavslarda hisoblab chiqadi va agar natija rost = `(true)` bo'lsa, kod blokini bajaradi.

## 'If'

`if` so'zi ingliz tilidan "agar" deb tarjima qilinadi va deyarli barcha dasturlash tillarida shartlarni yozish uchun foydalaniladi. 

Masalan:

```javascript
let year = prompt('ECMAScript-2015 spetsifikatsiyasi qaysi yilda nashr etilgan?', '');

if(year == 2015) alert('To‘g‘ri topdingiz 🙂');
```

Yuqoridagi misolda ***if*** bir qatorda bajarilyapti, buni biz yana ham murakkab qilishimiz mumkin.

Agar biz bir nechta ko'rsatmalarni bajarishni istasak, unda siz jingalak qavslarni ochishimiz kerak bo‘ladi. `{}` ichiga kod blokini kiritishingiz kerak:

Misol:

```javascript
let year = prompt('ECMAScript-2015 spetsifikatsiyasi qaysi yilda nashr etilgan?', '');

if (year == 2015) {
  alert( 'To‘g‘ri topdingiz 🙂' );
  alert( 'Siz judayam aqli ekansiz palonchi 😊' );
}
```

Agar bitta buyruq bajarilsa ham, ***if*** operatoridan foydalanganda har doim `{}` jingalak qavslardan foydalanishni tavsiya etiladi. Bu kodning o'qilishini yaxshilaydi.


Shuningdek, biz o'zgaruvchida oldindan hisoblangan mantiqiy qiymatni if ga o'tkazishimiz mumkin, masalan:

```javascript
let condition = (year == 2015); // buyereda bu true yoki false qiymat boladi

if (condition) {
  let year = prompt('ECMAScript-2015 spetsifikatsiyasi qaysi yilda nashr etilgan?', '');

  alert( 'To‘g‘ri topdingiz 🙂' );
  alert( 'Siz judayam aqli ekansiz palonchi 😊' );
}
```

## 'else' clause

Xop organuvchilar biz bildiki ***if*** qachonki bizning shart `true` bo‘lsa ishlar ekan.
***else*** ***if***ni aksi qachonki ***if*** sharti bajarilmasa else blocki ishga tushadi.

Misol:

```javascript
let year = prompt('ECMAScript-2015 spetsifikatsiyasi qaysi yilda nashr etilgan?', '');

if (year == 2015) {
  alert( 'To‘g‘ri topdingiz 🙂' );
  alert( 'Siz judayam aqli ekansiz palonchi 😊' );
} else {
    alert('E ukam topishingizga oz qolgandi, Topa olmadingiz. 😔')
}
```

## Bir qancha shart = Several conditions: 'else if'

