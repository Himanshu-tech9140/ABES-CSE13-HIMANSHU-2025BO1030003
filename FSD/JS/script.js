// function showText() {
//     let value = document.getElementById("box").value;
//     document.getElementById("output").innerHTML ="You typed: " + value;

// }

// function addNumbers(){
//     let a= Number(document.getElementById("n1").value);
//      let b= Number(document.getElementById("n2").value);
      
//      document.getElementById("sum").innerText= "Sum is:" + (a+b);
// }

function makeRed(){
    document.getElementById("c1").style.color="red";
}

function sayHello(){
    alert("Hello JavaScript!");
}

function textLength(){
    let val = document.getElementById("box").value;
    document.getElementById("output").innerHTML = "Length:" + val.length;
}

function reverseText(){
     let val = document.getElementById("box").value;
     let rev =val.split("").reverse().join("");
     document.getElementById("output").innerHTML = "Reversed:" + rev;
}

function enterName(){
    alert(document.getElementById("box").value);
     document.getElementById("output").innerHTML = "Your Name" + value;
}