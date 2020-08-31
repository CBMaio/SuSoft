const title = document.querySelector('h1')
const writing = str => {
    let arrFromString = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        title.innerText += arrFromString[i];
        i++;
        if(i === arrFromString.length){
            clearInterval(printStr);
        }
    }, 300);  
};

writing('uSoft')
