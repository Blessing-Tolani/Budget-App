let form = document.getElementById("form");
let form2 = document.getElementById("form2");
var array = [];
var inputIncome;
var arrayadd = [];
let sum = 0;
var x = 0;
var b = 0;
function clearForm(){
    var inputText = document.getElementById("item").value;
    var inputRate = document.getElementById("rating").value;
   var obj = [];
   obj.push(inputText);
   obj.push(inputRate);
    array.push(obj);
    arrayadd.push(inputRate);
    document.getElementById("form2").reset();
  

 
}

form.onsubmit = (e) => {
    e.preventDefault();
    inputIncome = + document.getElementById("income").value;
    document.getElementById("smalltext").style.display = "block";
    document.getElementById("one").disabled = true;
    
}


form2.onsubmit = (e) => {
    e.preventDefault();
    for(i=0; i<array.length; i++){
        x = +arrayadd[i];
        sum+=x;
    }
 
    for(i=0; i<array.length; i++){
        b = +arrayadd[i];
        allocation = (b/sum)*inputIncome;
        let c = 0;
        let d = 1;
        var table = document.getElementById("tbody");
        var row = table.insertRow(i);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell.innerHTML = array[i][c];
        cell1.innerHTML = array[i][d];
        cell2.innerHTML = Math.round(allocation);
    }
    array = [];
    
    
}





