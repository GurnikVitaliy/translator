
// const btnSend  = document.getElementById('btn-send');
// const title = document.getElementById('title');
// const text = document.getElementById('text');

// function createNewMsg(user) {

//     const li = document.createElement('li');
//           li.innerHTML = user.name;
//           title.append(li);
     
//     const li2 = document.createElement('li');
//           li2.innerHTML = user.msg;
//           text.append(li2);

// }



// btnSend.addEventListener('click',function () {

//     const inpName = document.getElementById('name').value;
//     const inpMsg = document.getElementById('msg').value;


//     let user = {
//         name : inpName,
//         msg : inpMsg
//     } 

//     createNewMsg(user);
          
//     document.getElementById('name').value = '';
//     document.getElementById('msg').value = ''
// })





const inp1 = document.getElementById('inp1'),
      inp2 = document.getElementById('inp2'),
      inputs = document.querySelectorAll('input'),
      btn = document.getElementById('btn'),
      table = document.getElementById('table');

let words;

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('data'));

class createWord {
    constructor(translate, russian) {
        this.translate = translate;
        this.russian = russian;
    }
}      

const addWordToTable = index =>  {
    table.innerHTML += `
        <tr>
            <td>${words[index].translate}</td>
            <td><td>${words[index].russian}</td></td>
        </tr>
    `
}

words.forEach(function(item, index) {
    addWordToTable(index);
})

btn.addEventListener('click', function() {
    if (inp1.value.length < 2 ||
        inp2.value.length < 2 ||
        !isNaN(inp1.value)    ||
        !isNaN(inp2.value)
    ) {
        for(let input of inputs) {
            input.classList.add('er');
        }
    }
    else {
        for(let input of inputs) {
            input.classList.remove('er');
        }
        words.push(new createWord(inp1.value, inp2.value));
        localStorage.setItem('data', JSON.stringify(words));
        addWordToTable(words.length -1);

       inp1.value = '';
       inp2.value = '';
    }
})