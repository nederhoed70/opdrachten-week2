const buttons = Array.from(document.getElementsByClassName('big-five-button'));
const remOneButton = document.getElementById("remove-first-item-button");
const remAllButton = document.getElementById("remove-all-button");
//console.log(remButton);

const pressButtonAnimal = () => {
    //console.log(event.target.innerHTML);
    const newLi = document.createElement('li');
    const newAnimal = event.target.innerHTML;
    const listOfAnimals = document.getElementById("spotted-animals-list");
    //console.log(listOfAnimals);
    newLi.appendChild(document.createTextNode(newAnimal));
    listOfAnimals.appendChild(newLi);
}

const removeElement = (oneAll) => {
    //console.log(event.target.innerText);
    const ul = document.getElementById("spotted-animals-list");
    //const btLabel = (event.target.innerText);
   if (oneAll === 'one') {
     ul.firstChild.remove();
     console.log(ul.firstChild)
    } else {
        ul.innerHTML='';
    };
}

document.addEventListener("DOMContentLoaded", function() {
buttons.forEach((button) => button.addEventListener('click', pressButtonAnimal));
remOneButton.addEventListener('click', function() {removeElement('one')});
remAllButton.addEventListener('click', function() {removeElement('all')});
});