function price(){
    return Number(document.getElementById('price').value);
}
function quantity(){
    return Number(document.getElementById('quantity').value);
}
function total(){
    document.getElementById('output').innerHTML = "Total: " + (price() * quantity());
}
function cash(){
    return Number(document.getElementById('cash').value);
}
function save(){
    document.getElementById('change').innerHTML = "Change: " + (total() - cash());
}
/*function isValid(){
    let num1 = value1();
    let num2 = value2();
    if (isNaN(num1) || isNaN(num2)){
        return false
    }
    else{
        if (num1 == 0 || num2 == 0){
            return false
        }
        else{
            return true;
        }
    }
}
function value1(){
    
    return Number(document.getElementById('price').value);
}

function value2(){
    return Number(document.getElementById('quantity').value);
}
function total(){
    if (isValid() == true){
        alert(value1() * value2());
       }
       else{
        alert("Error");
       }
}
*/