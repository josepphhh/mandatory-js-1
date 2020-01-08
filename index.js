let title = document.querySelector('title');
title.textContent = 'Fruits & Vegetables corp';

let h1 = document.getElementsByTagName("h1")[0];
h1.textContent = 'Fruits & Vegetables Corp';

let a = document.getElementsByTagName("a")[2];
a.textContent = 'Vegetables';
a.href = '#vegetables';     



let h2 = document.createElement("h2");
h2.textContent = 'Contact';
document.getElementById('contact').appendChild(h2);



let removeTd = document.querySelectorAll('#about');
for (let i = 0; i < removeTd.length; i++) {
    removeTd[i].remove();
}

let removeTable = document.querySelectorAll('table thead tr td');
for (let i = 0; i < removeTable.length; i++) {
    removeTable[i].remove();
}

let thE = document.createElement('th');
thE.textContent = 'Name ';
document.querySelector('table thead tr').appendChild(thE);

let thEe = document.createElement('th');
thEe.textContent = 'Email ';
document.querySelector('table thead tr').appendChild(thEe);

let mySection = document.createElement('section');
mySection.id = "about";
document.getElementById('main').appendChild(mySection);



let about = document.createElement('h2');
about.textContent = 'About';
document.getElementById("about").appendChild(about);



let p = document.createElement("p");
p.textContent = "We're the best in fruits & vegetables";
document.getElementById('about').appendChild(p);

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.href= "main.css";
link.rel = "stylesheet";
link.type = "text/css";
head.appendChild(link);


const div1 = document.querySelector("#contact p");
const div2 = document.querySelector("#contact table");
const div3 = document.querySelector("#contact h2");
div1.after(div2);
div1.before(div3);

const section1 = document.querySelector("#about");
const section2 = document.querySelector("#contact");
section1.after(section2);







