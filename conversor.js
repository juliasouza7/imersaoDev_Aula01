document.getElementById('convert').onclick = moneyConvert;
document.getElementById('clear').onclick = clear;

function moneyConvert(){
    var dolar = document.getElementById("dolar").value;
    var real = document.getElementById("real").value;

    if(isNaN(dolar) || isNaN(real)){
        alert("Digite um valor válido!");
        return;
    } 
    
    else if(dolar ===''){
        dolar = (parseFloat(5.70 * real));
    }

    else if(real ===''){
        real = (parseFloat(5.70 * dolar));
    }

    document.getElementById("dolar").value= parseFloat(dolar).toFixed(2);
    document.getElementById("real").value= parseFloat(real).toFixed(2);

}

function clear(){
    document.getElementById("dolar").value="";
    document.getElementById("real").value="";

}
