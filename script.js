const Result = document.querySelector('inputext');
const buttons= document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick =()=>{
        if (item.id == 'clear'){
            display.innerText='';
        }else if( item.id=='Delete()'){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1);
        }else if(display.innerText!=' ' && item.id=='Result()'){
            try {
                display.innerText=eval(display.innerText.replace('^', '**'));
            }
            catch(err){
                alert("Enter the valid input ");
            }
        }else if(display.innerText==' ' && item.id =='Result()'){
            display.innerText='Empty';

        }else {
            display.innerText += item.id;
        }
            
    

        
    
    
    }


            

    
    }
)





const themeToggleBtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.calculator');
const toggleIcon=document.querySelector('.toggler-icon');
 