

let n= 50;
var str = "*"

//rain prompt//

var rain = window.prompt("How many inches of rain fell?")
console.log(str.repeat(rain))

if(rain>=20){
  n*=0.90;
    console.log("The yield should be " + n + " bushels per acre.")
  }
  
  else if(rain<10){
  n*=0.80;
    console.log("The yield should be " + n + " bushels per acre.")
  }



  //fertilizer prompt//
  
var fertilizer = window.prompt("Did you use fertilizer?")

  
if(fertilizer==="no"){
  
}


if(fertilizer==="yes"){
  window.prompt("Did you use premium or regular fertilizer?");
  
    if("regular"){
      n+=0.10;  
}  

    else if("premium"){
          n+=0.15;
  }
}

console.log(n)



