const hakkimizda= document.querySelector('.item2');
const item2 = document.querySelector('.nav-item2-none')
const item2Block = document.querySelector('.nav-item2-block')
const item2None = document.querySelector('.nav-item2-none')


hakkimizda.addEventListener('mouseover', olustur);
function olustur(e){
    e.preventDefault();
item2.className='nav-item2-block';
}

hakkimizda.addEventListener('mouseleave', sondur);
function sondur(e){
    e.preventDefault();
item2.className='nav-item2-none';


}
