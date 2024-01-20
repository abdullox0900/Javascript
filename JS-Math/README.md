# JS Math

JavaScriptda `Math` matematik ob'ekti raqamlar bo'yicha matematik vazifalarni bajarishga imkon beradi.

Boshqa ob'ektlardan farqli o'laroq, matematik ob'ektda konstruktor yo'q.❗️

## Math Methods

`Math.floor()` Sonlarni eng yaqin kichik butun qisma qarab yaxlitlaydi `5.4` yoki `5.7` Result: `5` 

```javascript
let x = 5.6;

Math.floor(x); // 5
```

`Math.ceil()` Sonlarni eng yaqin kattasiga butun qisma qarab yaxlitlaydi `5.4` yoki `5.7` Result: `6`

```javascript
let x = 5.6;

Math.ceil(x); // 6
```

`Math.round()` Sonlarni eng yaqin butun qismga yaxlitlaydi. 

`5.6` Result: `6` - `5.4` Result: `5` 

```javascript
let x = 5.7;
let y = 5.3;
let z = 5.5;

Math.round(x); // 6
Math.round(y); // 5
Math.round(z); // 5
```

`Math.random()` bu metod random son qaytaradi. (Returns a random number between 0 and 1).

```javascript
Math.random(); // random number.
```

```javascript
Math.floor(Math.random() * 10); // 1dan 10gacha son qaytaradi.
```

`Math.max()` bu metod sonlar uchidagi eng katta sonni aniqlab qaytarib beradi.

```javascript
Math.max(5, 9, 3); // 9

Math.max(-5, -9, -3); // -3
```

`Math.min()` bu metod sonlar uchidagi eng kichkina sonni aniqlab qaytarib beradi.

```javascript
Math.min(5, 2, 7); // 2

Math.min(-5, -2, -7); // -7
```

### SHARQ HIKMATLARI 🙂

Avvalo olim bo‘l! Loaqal ta’lim oluvchi yoki tinglovchi, ilmu ulamolarni sevuvchi bo‘lgin.
