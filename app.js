function getNumber(num){

    var inptxt = document.getElementById("inptxt");
    
    inptxt.value += num;
}
    

function clearResult(clear){

    var inptxt = document.getElementById("inptxt");
    
    inptxt.value = '';
}

function evulate() {
    var inptxt = document.getElementById("inptxt");
    console.log( inptxt.value)
    inptxt.value = eval(inptxt.value);
}


