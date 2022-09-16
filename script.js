function col(){
    document.getElementById("image").src = "Images/1.jpg";
    // alert("clicked");
}

function col1(){
    document.getElementById("image").src = "Images/2.jpg";
    // alert("clicked");
}

function col2(){
    document.getElementById("image").src = "Images/3.jpg";
    // alert("clicked");
}


function txt(){
    document.getElementById("image1").src = "Images/5.jpg";
}

function txt1(){
    document.getElementById("image1").src = "Images/6.jpg"; 
}

function txt2(){
    document.getElementById("image1").src = "Images/7.jpg";
}






function Sub(){
    var n, k, r, e, v, sum, avg;

    n=(document.getElementById('aname').value);
    k=parseFloat(document.getElementById('am').value);
    r=parseFloat(document.getElementById('aj').value);
    e=parseFloat(document.getElementById('ad').value);
    v=parseFloat(document.getElementById('an').value);


    sum=k+r+e+v;
    avg=sum/4;


    var newTable = document.getElementById('TableScore');
    var row = newTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);

    cell4.innerHTML= n;
    cell3.innerHTML=sum;
    cell2.innerHTML = avg;

    if(avg>=50){
     cell1.innerHTML="<font color=green>Pass</font>";
    }else{
     cell1.innerHTML="<font color=red>Fail</font>";
    }
   }








