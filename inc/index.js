

        // Basic Selector

// let h1 = document.getElementById('dom');
// h1.innerHTML = 'Javascript Project';
// console.log(h1);


// let h1 = document.getElementsByTagName('h1');
// let paras = document.getElementsByClassName('lead');
// console.log(paras);


let btn = $('#click');

let color = ['red', 'yellow', 'blue', 'green'];

let i = 0;

btn.addEventListener('click', function(){
    let h1 = $('#dom');
    h1.innerHTML = 'Javascript Project';

    h1.style.background = color[i]

    if (i >= color.length) {
        i=0
    }else{
        i++
    }
})



            // Query Selector


    let con = document.querySelectorAll('h1');

    console.log(con);


    function $(selector){
        return document.querySelector(selector);
    }

    let h1 = document.querySelector('#dom');

    // h1.style.background = 'salmon'
    // h1.style.color = 'white'
    // h1.style.padding = '20px'
    

    let h1Styles = {
        background: 'salmon',
        color: '#fff',
        padding: '20px',
        textAlign: 'center'
    }

    Object.assign(h1.style, h1Styles);

    let pStyles = {
        fontSize: '18px',
        padding: '10px',
        color: '#333',
        lineHeight: '1.3'
    }

    let p = $('#my-para');

    Object.assign(p.style, pStyles);




        // Event

        let btn2 = document.querySelector('#btn2');
        let para2 = document.querySelector('#my-para2');

        let isShown = false;

        btn2.addEventListener('click', function(){
            if (isShown) {
                para2.style.visibility = 'hidden'
                isShown = false
                btn2.innerHTML = 'Show'
            } else {
                para2.style.visibility = 'visible'
                isShown = true
                btn2.innerHTML = 'Hide'
            }
        });



        // Creating & Deleteing

        let root = document.querySelector('#root');

        let jumbotronDiv = document.createElement('div');
        let heading = document.createElement('h1');
        heading.className = 'dispaly-2 py-5';
        heading.innerHTML = '<strong>Hello</strong>';

        jumbotronDiv.className = 'jumbotron text-center';
        jumbotronDiv.setAttribute('id', 'my-jmb');

        jumbotronDiv.appendChild(heading);
        root.appendChild(jumbotronDiv);

        let nameField = document.querySelector('#name-field');
        let ul = document.querySelector('#name-list')

        nameField.addEventListener('keypress', function(event){
            if (event.keyCode === 13 ) { // thats mean enter key press
                let name = event.target.value; 
                createLi(ul, name);
                event.target.value = ''
            }
        });

        function createLi(ul, name){
            let li = document.createElement('li');
            li.className = 'list-group-item d-flex';
            li.innerHTML = name;

            let span = document.createElement('span');
            span.innerHTML = 'X';
            span.className = 'ml-auto';
            span.style.color = 'red';
            span.style.cursor = 'pointer';

            span.addEventListener('click', function(){
                ul.removeChild(li);
            })

            li.appendChild(span);

            ul.appendChild(li);
        }


