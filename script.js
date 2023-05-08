let string = "";
let buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target.innerHTML);
        let command = e.target.innerHTML;
        if(command == '='){
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch(error){
                string = "Syntx Error";
                document.querySelector('input').value = string;
            }
        }
        else if(command == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})