let ans=document.querySelector('.actualans');
const btn=document.querySelectorAll('button');
let screenval='';
for (const item of btn) {

item.addEventListener('click',(e)=>{
    buttonval=e.target.innerText;
    console.log(buttonval);

    
    if(buttonval=='÷') {
        buttonval='/';
        screenval+=buttonval;
        ans.innerHTML= screenval;
    }

    else if(buttonval=='✕') {
        buttonval='*';
        screenval+=buttonval;
        ans.innerHTML= screenval;
    }
    else if(buttonval=='AC'){
        screenval='';
        ans.innerHTML= screenval;
    }
   
    else if(buttonval=='='){
        ans.innerHTML=eval(screenval);
    }
    else if(buttonval=='DEL'){
        var number=screenval;
        var len=number.length-1;
        screenval=number.substring(0,len);
        ans.innerHTML= screenval;
    }
    else{
        screenval+=buttonval;
        ans.innerHTML=screenval;
    }
})
    
};