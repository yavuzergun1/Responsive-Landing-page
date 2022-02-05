const anasayfa= document.querySelector('.item1');
const item1Block = document.querySelector('.nav-item1-block');
const item1None = document.querySelector('.nav-item1-none');
const nav2= document.querySelector('.nav2');
let nav2Size= nav2.clientWidth;

if(nav2Size < 500){
    anasayfa.addEventListener('click', olusturAnasayfa);

    function olusturAnasayfa(e){
        e.preventDefault();
    item1None.className='nav-item1-block';
    }
    anasayfa.addEventListener('click', sondurAnasayfa);
    function sondurAnasayfa(e){
        e.preventDefault();
    item1None.className='nav-item1-none';
    }
    item1None.addEventListener('click', altOlusturAnasayfa);
    function altOlusturAnasayfa(e){
        e.preventDefault();
    item1None.className='nav-item1-block';
    }
    item1None.addEventListener('click', altSondurAnasayfa);
    function altSondurAnasayfa(e){
        e.preventDefault();
    item1None.className='nav-item1-none';
    }
    console.log(nav2Size);
} else{ 
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
};


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


let kupurler= [

{
    image: 'img/image (42).png',
    description: '2 Dünya Savaşı Dönemi'
},

{
    image: 'img/image (45).png',
    description: 'Sene 1935 - Bir şarap reklamı'
},

{
    image: 'img/image (93).png',
    description: 'Sene 1936 - Diş macunu reklamı'
},

{
    image: 'img/son posta_1937_mart_12_.pdf.png',
    description: 'Sene 1937 - Atatürk\'ün Ankara\'ya gelişi'
},

{
    image: 'img/son telgraf_1937_mart_17_.pdf.png',
    description: 'Sene 1937 - Yorgun ve Bitkin Dünya'
},

{
    image: 'img/ulus_1941_mart_18_.pdf.png',
    description: 'Sene 1941 - Tarlada çalışan emekçi kadınlar'
}

];

let index= 0;
let slaytCount= kupurler.length;
let settings={
    duration: '1000',
    random: false
}

showSlide(index);
slider(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function sol (){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function sol (){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.fas').forEach(function(item){ 
    item.addEventListener('mouseenter', function(){
    clearInterval(interval);
    })});

    document.querySelectorAll('.fas').forEach(function(item){ 
        item.addEventListener('mouseleave', function(){
        slider(settings);
        })});

function slider (settings){
    let prev=2;
   interval=  setInterval(function(){
if(settings.random){
/* aynı sayıyı tekrar üretmesin diye  while 'a şart koyduk*/
    do{
        index= Math.floor( Math.random()*slaytCount);
    } while(index==prev)
prev=index;
   
} else {
    if(slaytCount == index+1){
        index=-1;
    } 
    showSlide(index)
    console.log(index);
    index++
 
}

    }, settings.duration)
}




function showSlide(i){      /* Buradaki i değişkeni neden konmuş? neden direk index denmemiş anlayamadım*/
    
if(i<0){
    index= slaytCount-1;    
     
}
if(i>=slaytCount){
    index=0;
    
}


document.querySelector('.kupur').setAttribute('src', kupurler[index].image);
document.querySelector('#img-des').textContent= kupurler[index].description;
};


/* function show(i){
    i=indeks
    i=i-1
    console.log(i);
}

show(5) */