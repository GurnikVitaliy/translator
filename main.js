
// https://api.telegram.org/bot6056299567:AAGocFD7VobQgbcKOx9a3GJ6wBigB3WjEWc/sendMessage?chat_id=1201316750&text=cool_12'

// 'https://api.telegram.org/bot6056299567:AAGocFD7VobQgbcKOx9a3GJ6wBigB3WjEWc/getUpdates'

// ALINA

const btn1 = document.querySelector('#btn1');
const token1 = '5667940201:AAGW91sDZz9QZfN2g4xSAiSVIDBqZFoVVZo';

btn1.addEventListener('click', () => {
   setTimeout(() => {
    const input1 = document.querySelector('#input1');
    let inp1 = input1.value;

    input1.value = '';

    const url = 'https://api.telegram.org/bot'+token1+'/sendMessage?chat_id=1201316750&text=';
    let xttp = new XMLHttpRequest();

    xttp.open("GET", url+inp1);
    xttp.send();
   },10000)
})
const print = document.querySelector('.print');


btn2.addEventListener('click', () => {
    setTimeout(() => {
     const input1 = document.querySelector('#input1');
     let inp1 = input1.value;
 
     input1.value = '';
 
      const url = 'https://api.telegram.org/bot'+token1+'/sendMessage?chat_id=1201316750&text=';
     let xttp = new XMLHttpRequest();
 
     xttp.open("GET", url+inp1);
     xttp.send();
    },15000)
 })
 const printt = document.querySelector('.print');
