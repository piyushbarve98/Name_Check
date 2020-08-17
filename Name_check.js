function myfunction(){
var name = document.getElementById("name").value;
var num = Number(name);
var temp= isNaN(num);
var p=true;
try{
    if (name==''){
        p=false;
         throw "Input is Empty Please Enter Your Name";
        

}
    if(!temp) {
        p=false;
        throw "Please Enter Text";
   
}
    
}
catch(err){
    alert(err);
}
if(p){
document.getElementById("demo").innerHTML = "Hello " + name + " your name has been " +"<br>"+ "submitted succesfully";
}
}

