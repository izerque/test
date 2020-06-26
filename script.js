let calculator= document.querySelector('#calculator');
let keys =document.querySelector('#keys');
// let nine =document.querySelector('#num9');
const display= document.querySelector('#answer');
//  links the clicked element.


keys.addEventListener('click', e=>{

    if (e.target.matches('div','p')){
        // alert(e.target.classList)
        const key = e.target;
         
        console.log(key)
        
        
        // display.insertAdjacentHTML('beforeend', key.innerHTML)
        
        
        const action = key.dataset.action;
        const keyContent=key.textContent;
        const displayedNum=answer.textContent;
        console.log('<<<<',keyContent);
        let x=console.log('>>>',displayedNum);
        let y=console.log('>>>##',answer.textContent)
        if(x===y)




        if(!action && displayedNum ==='0'){
          answer.textContent += " " + keyContent;
               
        }
      //if (!action){
      //     console.log('number key!')
      // }
      // if (action==='add'|| action==='subtract' || action === 'multiply' || action=== 'divide'){
      //     console.log('is an operator key!')
      // }
      // if(action === 'decimal'){
      //     console.log('decimal value!')
      // }
      // if (action === 'clear'){
      //     console.log('clear value!')
      // }
      // if(action === 'calculate'){
      //     console.log('calculate button!')
      // }
    }
})