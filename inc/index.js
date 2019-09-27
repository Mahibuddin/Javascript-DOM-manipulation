

// let h1 = document.getElementById('dom');
// h1.innerHTML = 'Javascript Project';
// console.log(h1);


// let h1 = document.getElementsByTagName('h1');
// let paras = document.getElementsByClassName('lead');
// console.log(paras);


let btn = document.getElementById('click');

let color = ['red', 'yellow', 'blue', 'green'];

let i = 0;

btn.addEventListener('click', function(){
    let h1 = document.getElementById('dom');
    h1.innerHTML = 'Javascript Project';

    h1.style.background = color[i]

    if (i >= color.length) {
        i=0
    }else{
        i++
    }
})
