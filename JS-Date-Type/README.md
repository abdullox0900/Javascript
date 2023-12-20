# Date Type

JavaScriptda har bir qiymat o’zining ma’lum bir tipiga ega bo’ladi.

JavaScript o'zgaruvchisi har qanday turdagi ma'lumotlarni o'z ichiga olishi mumkin.

## JavaScript 2 xil turdagi data typlar bor,

1. Primitive
2. Reference

***Primitive*** tiplar o’zida faqatgina yagona qiymatni saqlay oladigan tiplardir. Bu tiplarga 7 ta tiplar kiradi.

***Reference*** tiplar esa o’zida bir qancha tiplardan tuzilgan ko’plab qiymatlarni saqlay oluvchi tiplardir. Bu turga 1 ta tip kiradi.

### Primitive

1. Number
2. String
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

1. String

```javascript
let myString = 'Hello World! 🌍';
```

2. Number

```javascript
let myNumber = 32;
let myFloat = 3.2;
```

3. Boolean 

```javascript
let isStudent = true;
let myBoolean = false;
```

4. undefined 

```javascript
let myUndefined;
```

5. Null 

```javascript
let myImg = null;
```

6. BigInt

```javascript
let bigNumber = BigInt("123456789012345678901234567890");
```

7. Symbol

```javascript
let ID = Symbol(‘12’);
```

JavaScript dinamik turlarga ega. Bu shuni anglatadiki, bir xil o'zgaruvchidan turli xil ma'lumotlar turlarini saqlash uchun foydalanish mumkin:

```javascript
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
```