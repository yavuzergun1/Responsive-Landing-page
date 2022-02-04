const anasayfa= document.querySelector('.item1');
const item1Block = document.querySelector('.nav-item1-block')
const item1None = document.querySelector('.nav-item1-none')


anasayfa.addEventListener('mouseover', olusturAnasayfa);

function olusturAnasayfa(e){
    e.preventDefault();
item1None.className='nav-item1-block';
}
anasayfa.addEventListener('mouseleave', sondurAnasayfa);
function sondurAnasayfa(e){
    e.preventDefault();
item1None.className='nav-item1-none';
}
item1None.addEventListener('mouseover', altOlusturAnasayfa);
function altOlusturAnasayfa(e){
    e.preventDefault();
item1None.className='nav-item1-block';
}
item1None.addEventListener('mouseleave', altSondurAnasayfa);
function altSondurAnasayfa(e){
    e.preventDefault();
item1None.className='nav-item1-none';
}



const hakkimizda= document.querySelector('.item2');
const item2Block = document.querySelector('.nav-item2-block')
const item2None = document.querySelector('.nav-item2-none')


hakkimizda.addEventListener('mouseover', olustur);

function olustur(e){
    e.preventDefault();
item2None.className='nav-item2-block';
}
hakkimizda.addEventListener('mouseleave', sondur);
function sondur(e){
    e.preventDefault();
item2None.className='nav-item2-none';
}
item2None.addEventListener('mouseover', altOlustur);
function altOlustur(e){
    e.preventDefault();
item2None.className='nav-item2-block';
}
item2None.addEventListener('mouseleave', altSondur);
function altSondur(e){
    e.preventDefault();
item2None.className='nav-item2-none';
}



const projeler= document.querySelector('.item3');
const item3Block = document.querySelector('.nav-item3-block')
const item3None = document.querySelector('.nav-item3-none') 

projeler.addEventListener('mouseover', olusturProje);

function olusturProje(e){
    e.preventDefault();
item3None.className='nav-item3-block';
}
projeler.addEventListener('mouseleave', sondurProje);
function sondurProje(e){
    e.preventDefault();
item3None.className='nav-item3-none';
}
item3None.addEventListener('mouseover', altOlusturProje);
function altOlusturProje(e){
    e.preventDefault();
item3None.className='nav-item3-block';
}
item3None.addEventListener('mouseleave', altSondurProje);
function altSondurProje(e){
    e.preventDefault();
item3None.className='nav-item3-none';
}



const kupur= document.querySelector('.item4');
const item4Block = document.querySelector('.nav-item4-block')
const item4None = document.querySelector('.nav-item4-none') 

kupur.addEventListener('mouseover', olusturKupur);

function olusturKupur(e){
    e.preventDefault();
item4None.className='nav-item4-block';
}
kupur.addEventListener('mouseleave', sondurKupur);
function sondurKupur(e){
    e.preventDefault();
item4None.className='nav-item4-none';
}
item4None.addEventListener('mouseover', altOlusturKupur);
function altOlusturKupur(e){
    e.preventDefault();
item4None.className='nav-item4-block';
}
item4None.addEventListener('mouseleave', altSondurKupur);
function altSondurKupur(e){
    e.preventDefault();
item4None.className='nav-item4-none';
}