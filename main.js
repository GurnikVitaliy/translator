
// https://api.telegram.org/bot6056299567:AAGocFD7VobQgbcKOx9a3GJ6wBigB3WjEWc/sendMessage?chat_id=1201316750&text=cool_12'

// 'https://api.telegram.org/bot6056299567:AAGocFD7VobQgbcKOx9a3GJ6wBigB3WjEWc/getUpdates'

// ALINA
const btn1 = document.querySelector('#btn1');
const token1 = '6050757748:AAE0SlqzlC9im6u5LJpO0k30O4xxT8WLeT8';

btn1.addEventListener('click', () => {
     setTimeout(() => {
    const input = document.querySelector('#input1');

    let inp1 = input.value;
    const url = 'https://api.telegram.org/bot'+token1+'/sendMessage?chat_id=1201316750&text=';
    let xttp = new XMLHttpRequest();

    xttp.open("GET", url+inp1);
    xttp.send();
    input1.value='';
     },3000)
})


// Кристина
const btn2 = document.querySelector('#btn2');
const token2 = '6036356654:AAHW93KddrrOgNunuxzzOIDInznOWUxHhi0';

btn2.addEventListener('click', () => {
    const input2 = document.querySelector('#input2');

    let inp2 = input2.value;
    const url = 'https://api.telegram.org/bot'+token2+'/sendMessage?chat_id=1201316750&text=';
    let xttp = new XMLHttpRequest();

    xttp.open("GET", url+inp2);
    xttp.send();
    
})
