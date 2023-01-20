console.log('hekkp');
let checkbox = document.getElementsByClassName('check-box');
console.log(checkbox);
let deleteButton = document.getElementById('deleteButton');
for(let i=0;i<checkbox.length;i++){
    checkbox[i].addEventListener('click', deleteHandler)
    console.log(checkbox[i]);
}

function deleteHandler(){
   let abc = this.getAttribute('value');
    // console.log(abc)
   deleteButton.setAttribute('href',`/delete-task/?id=${abc}`);
   
}