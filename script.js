let input = document.querySelector('input');
let button=document.querySelector('button');

 button.addEventListener('click', addlist);
 document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addlist();
    }
    });
function addlist(){
const list = document.createElement('li');
list.textContent = input.value;
document.querySelector('#ullist').appendChild(list);
list.style.listStyle='none';

input.value=""; 
}