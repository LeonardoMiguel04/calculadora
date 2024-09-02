function calcula(opera){
    let num1=parseFloat(document.getElementById('um').value);
    let num2=parseFloat(document.getElementById('dois').value);
    let resul = 0;
    if(isNaN(num1) || isNaN(num2)){
        alert('fala um número real')
    }else{
        if(opera == '+'){
            resul = num1+num2;
        }else if(opera == '-'){
            resul = num1-num2
        }else if(opera == '*'){
            resul = num1*num2;
        }else if(opera == '/'){
            resul = num1/num2;
    }
    document.getElementById('resul').textContent = "resultado: " + resul
}
}   