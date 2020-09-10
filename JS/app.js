const writing = str => {
    const title = document.querySelector('h1')
    let length = str.length;
    let i = 0;
    let printStr = setInterval(function(){
       title.innerHTML = title.innerHTML.substr(0,title.innerHTML.length-1) + str.charAt(i) + " ";
        i++;
        if(i === str.length){
            clearInterval(printStr);
            writingSecond('Software Development')
        }
    }, 100);  
};

writing('SuSoft');

const writingSecond = str => {
    const subtitle = document.querySelector('#subtitle')
    let length = str.length;
    let i = 0;
    let printStr = setInterval(function(){
       subtitle.innerHTML = subtitle.innerHTML.substr(0,subtitle.innerHTML.length-1) + str.charAt(i) + " ";
        i++;const writingSecond = str => {
            const subtitle = document.querySelector('#subtitle')
            let length = str.length;
            let i = 0;
            let printStr = setInterval(function(){
               subtitle.innerHTML = subtitle.innerHTML.substr(0,subtitle.innerHTML.length-1) + str.charAt(i) + " ";
                i++;
                if(i === str.length){
                    clearInterval(printStr);
                }
            }, 100);  
        };
        if(i === str.length){
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

