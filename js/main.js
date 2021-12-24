
const btnSuccess = document.getElementById('success');
const btnWarn = document.getElementById('warn');
const btnError = document.getElementById('error');
const listCross = document.querySelectorAll('.boton-x');
const boxSuccess = document.querySelector('#boxSuccess');
const boxWarn = document.querySelector('#boxWarn');
const boxError = document.querySelector('#boxError');
const listA = document.querySelectorAll('a');



const init = () => {    
    listCross.forEach(cross => {
        cross.addEventListener('click',()=>{
            const box = cross.parentElement.parentElement;            
            box.classList.add('hide');
        })
    });
    btnSuccess.addEventListener('click',()=>{
        if (boxSuccess.classList.contains('hide')){
            boxSuccess.classList.remove('hide');
        }
    })
    btnError.addEventListener('click',()=>{
        if (boxError.classList.contains('hide')){
            boxError.classList.remove('hide');
        }
    })
    btnWarn.addEventListener('click',()=>{
        if (boxWarn.classList.contains('hide')){
            boxWarn.classList.remove('hide');
        }
    })
    listA.forEach(a=>{
        a.addEventListener('click',()=>{
            const box = (a.parentElement.parentElement.parentElement.parentElement);
            box.classList.add('hide');
        })
    })
}

