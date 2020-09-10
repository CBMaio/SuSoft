const title = document.querySelector('h1')
const subtitle = document.querySelector('#subtitle')


const writing = str => {
    let arrFromString = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        title.innerText += arrFromString[i];
        i++;
        
        if(i === arrFromString.length){
            clearInterval(printStr);
            writingSecond('Software Development');
        }
    }, 400);  
};

writing('uSoft ');

const writingSecond = str => {
    
    let arrFromString = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        subtitle.innerText += arrFromString[i];
        i++;
        if(i === arrFromString.length){
            clearInterval(printStr);
        }
    }, 100);  
};

const elementsNavbar = [
    document.querySelector("#listContent"),
    document.querySelector("#listNavbar"),
    document.querySelector('#closeMenu')
];

const $btnNavbar = document.querySelector('#btnNavbar');
const titleSection = document.querySelector("#titleSection");
const $open = document.querySelector('#openMenu');

function showNavbar(){
    titleSection.classList.add('responsiveMoodNone');
    $open.classList.add('responsiveMoodNone');
    elementsNavbar.forEach(element => {
        element.classList.remove('responsiveMoodNone');
    })
};

function hideNavbar(){
    titleSection.classList.remove('responsiveMoodNone');
    $open.classList.remove('responsiveMoodNone')
    elementsNavbar.forEach(element => {
        element.classList.add('responsiveMoodNone');
    });
};


$btnNavbar.onclick= () => {
    titleSection.classList.contains('responsiveMoodNone') ? hideNavbar() : showNavbar()
}

