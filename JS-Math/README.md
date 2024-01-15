# JS Math

JavaScriptda `Math` matematik ob'ekti raqamlar bo'yicha matematik vazifalarni bajarishga imkon beradi.

Boshqa ob'ektlardan farqli o'laroq, matematik ob'ektda konstruktor yo'q.❗️

## Math Methods

`Math.floor` Sonlarni Yaxlitlaydi pastga karab `5.4` yoki `5.7` Result: `5` 

```javascript
let x = 5.6;

Math.floor(x); // 5
```

`Math.ceil` Sonlarni Yaxlitlaydi tepaga karab `5.4` yoki `5.7` Result: `6`

```javascript
let x = 5.6;

Math.ceil(x); // 6
```

`Math.round` Sonlarni Yaxlitlaydi fakat qoldi son qayerga yakin bolsa shuni oladi 

`5.6` Result: `6` - `5.4` Result: `5` 

```javascript
let x = 5.7;
let y = 5.3;
let z = 5.5;

Math.round(x); // 6
Math.round(y); // 5
Math.round(z); // 5
```
