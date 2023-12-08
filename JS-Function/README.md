# JavaScript Functions

JavaScript dasturlash tilida ham boshqa dasturlash tillari singari **_funksiya_** mavjud va vazifalari ham o'xshash hisoblanadi. **_Funksiya_** uchun qisqacha tarif quyidagicha keltirsak bo'ladi.

${\textsf{\color{orange} ***Funksiya*** - ma'lum bir vazifa bajarishga mujjallangan bo'lib dastur kodining bir qismi hisoblanib uni qayta-qayta foydalanish imkoniyati bo'lib kod bo'lagidir.}}$

## Function yaratish

1. JavaScriptda Funksiya e'lon qilish

```javascript
function showMassage() {
  alert("Hi everybody"); //function body
}

functionName(); // funksiyani ishlatish: invoking/running/calling/executing function
```

2. Function haqida

```javascript
function ismi(параметры) {
  //tana qismi
}
```

3. ❗️ **_Funksiya_** yordamida biz kodlarni qayta-qayta ishlatishimiz mumkin. Bir marta e'lon qilib, bir necha joyda ishlatishimiz mumkin.

```javascript
function logger(txt) {
  console.log(txt);
}

myFunction("Hello logger");
myFunction("Hello apple");
```

Korlanilardek biz bir **_funksiyani_** e’lon qilib qayta-qayta har xil ma’lumot berib ishlatyapiz

Result: `Hello logger`

Result: `Hello apple`

4. Yana bir misol 👇 a va b ning ko'paytmasini qaytaradigan **_Funksiya_**

```javascript
function myFunction(a, b) {
  return a * b; // a va b ni ko'paytmasi qaytariladi
}

myFunction(2, 4);
myFunction(3, 5);
```

Result: `8`

Result: `15`

## Nima uchun funksiyalar?

😎 Bir marta yarating ko'p marta foydalaning.
