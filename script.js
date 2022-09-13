const body = document.querySelector('body');

const content = document.createElement('p');
content.textContent = "Hey i'm Red!";
content.style.color = "red";

body.appendChild(content);


const content2 = document.createElement('h3');
content2.textContent = "Hey i'm Green!";
content2.style.color = "green";

body.appendChild(content2);


const div1 = document.createElement('div');
div1.setAttribute('style', 'background: pink; border-style: solid; border-width: 1px; border-color: black;')
/* div1.textContent = "test"; */
body.appendChild(div1);

const h1 = document.createElement('h1');
h1.textContent = "i'm in a div!";

div1.appendChild(h1);

const p = document.createElement('p');
p.textContent = "me too!";

div1.appendChild(p);