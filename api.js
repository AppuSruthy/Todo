function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
    var response = JSON.parse(this.responseText);
    var output = "";
    for(var i=0;i<response.length;i++){
        output += "<li style='list-style-type: none;' class='list-group-item '>"+' <input type="checkbox" id="check" onchange="temp()">'+response[i].title +"</li>";
    }
    document.getElementById("demo").innerHTML=output;
}
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();


}


var t=0;
function temp(){
   t=t+1;
  console.log(t);
  var promise = new Promise(function(resolve,reject){
   
    if(t==5){
      alert(" Congrats. 5 Tasks have been Successfully Completed");
    }
    else{
      reject(t);
    }
  });
  promise
  .then(function(s){
    alert(s);
  })
  .catch(function(t){
   
    console.log("add more");
    
    
  })
}


function validate(uname,psw,callback){
  var Username=document.getElementById("uname").value;
  var pwd=document.getElementById("psw").value;
  if(Username=="admin" && pwd=="12345"){
      alert("login successful");
      callback();
  }
 
  else{
      alert("Incorrect username or password!");
  }
}
 function callback(){
   
    window.location="main.html";
    
  }