//on click any digit event handler
//digit =pressed button

let first_number = 0;
let operation = ''


function digit_onClickHandle(digit){
    console.log("Button is pressed" ,digit);

    const element =document.getElementById('output');
    old_value=element.value;
    if (old_value == '0')
        element.value= digit;
    else
        element.value= old_value + digit;

}
//clear button on click handle
//const clear_onClickHandle =() =>{
function clear_onClickHandle(){
    const element=document.getElementById('output');
    element.value=0;
    first_number = 0;

}
//operation buttons on click handle
function plus_onClickHandle(op){
    const element =document.getElementById('output');
    first_number=parseInt(element.value);
    //console.log(first_number);
    element.value='0';
    operation = op;
}
function eq_onclickHandle() {
    const element=document.getElementById('output');
    const second_number=parseInt(element.value);
 

    let result = 0;
    if (operation ==="+"){
        result= first_number + second_number;

    }
    else if (operation ==="-"){
        result =first_number - second_number;
        
    }
    else if (operation ==="*"){
        result =first_number * second_number;
        
    }
    else if (operation ==="/"){
        result =first_number / second_number;
     
    }
    element.value=result;
    first_number=0;

}