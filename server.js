const calculate= ()=>{
    const a= Number(document.getElementsByClassName("op1")[0].value);
    const b= Number(document.getElementsByClassName("op2")[0].value);
    const op= document.getElementsByClassName("operator")[0].value;
    let res=0;
    if(isNaN(a)|| isNaN(b)){
        alert("invalid number");
        return;
    }
    switch(op){
        case '+':
            res= a + b;
            break;
        case '-':
            res= a - b;
            break;
        case '*':
            res= a * b;
            break;
        case '/':
            if(b===0){
                alert("cannot be divided by 0");
                return;
            }
            res= a / b;
            break;
        default: alert("invalid operation");
        return;
    }
    document.getElementsByTagName("h1")[0].innerHTML=res;
}