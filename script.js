'use strict';
const overlay=document.querySelector('.overlay');
const modal=document.querySelector('.modal');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');

const openingTheModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closingTheModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++)
{
    btnsOpenModal[i].addEventListener('click',openingTheModal)
}

btnCloseModal.addEventListener('click',closingTheModal)
overlay.addEventListener('click',closingTheModal)

document.addEventListener('keydown', function(object){
console.log(object.key);
if(object.key==='Escape' && !(modal.classList.contains('hidden')))
{
    closingTheModal();
}
})