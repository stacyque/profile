//loop
/*for (let x = 0;x<10;x++){
    document.write(x +' - hello'+'<br>');
}
//
function sum(num1,num2){
    return num1 + num2
    document.write()
}
/*function displayName (yourname){
    alert(`Your name is ${yourname}`)
}*/
function value1(){
    
    return Number(document.getElementById('num1').value);
}

function value2(){
    return Number(document.getElementById('num2').value);
}
function isValid(){
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

function add(){
   if (isValid() == true){
    alert(value1() + value2());
   }
   else{
    alert("Error");
   }
}

function minus(){
    if (isValid() == true){
        alert(value1() - value2());
       }
       else{
        alert("Error");
       }
}

function times(){
    if (isValid() == true){
        alert(value1() * value2());
       }
       else{
        alert("Error");
       }
}

function divide(){
    if (isValid() == true){
        alert(value1() / value2());
       }
       else{
        alert("Error");
       }
function output(answer){
    document.getElementById('output').innerHTML = "Answer is: "+answer
}