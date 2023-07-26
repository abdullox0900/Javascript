const elHead = document.head;
const elBody = document.body;

elHead.innerHTML += `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
        <title>User-Geolocation</title>
`;

// Create Elements
const elWrapper = document.createElement('div');
export const elDelTitle = document.createElement('h2');
export const elButton = document.createElement('button');

elDelTitle.textContent = 'Text'
elButton.textContent = 'getLocation'

// Element Style
elBody.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
`

elWrapper.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
`

elDelTitle.style.cssText  = `
    font-size: 30px;
    font-weight: 600;
`

elButton.style.cssText = `
    padding: 10px 20px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    line-height: 12px;
    border-radius: 6px;
    border: none;
    background: var(--theme-primary-default, #4C6FFF);
    cursor: pointer;
`

// Append Elements
elBody.append(elWrapper);
elWrapper.append(elDelTitle, elButton);