document.getElementById("btn").onclick= function (){
    if (document.getElementById("subject").value==""){
        alert("Hi"+" "+document.getElementById("fname").value +" "+document.getElementById("lname").value+ " "+"Please enter your response")
    }
    else{ alert("Hi"+" "+document.getElementById("fname").value +" "+document.getElementById("lname").value+ " "+
    "Your response has been received")};
}
