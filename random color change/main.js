function color(){
    var randomcolor=(Math.floor(Math.random()*7895));
    document.body.style.backgroundColor="#ff"+randomcolor;
    
}

function number(){
    var number=(Math.floor(Math.random()*(100)));
    // console.log(number);
    var m = document.querySelector(".number");
    m.innerText=number;
}

//

