const resultDiv = document.getElementById("result");

const buttons = {
  b1:document.getElementById("one"),
  b2:document.getElementById("two"),
  b3:document.getElementById("three"),
  b4:document.getElementById("four"),
  b5:document.getElementById("five"),
  b6:document.getElementById("six"),
  b7:document.getElementById("seven"),
  b8:document.getElementById("eight"),
  b9:document.getElementById("nine")
}
let player = 1;
const game =(position)=>{
    const button = buttons[position]
  //   console.log(button.innerText);
    if(player === 1){
      button.innerHTML = "X";
      player = 2;
    }  else{
      button.innerHTML = "O";
      player = 1; 
    }
    button.disabled = true;
   result();
}

const result = ()=>{
  if(buttons.b1.innerHTML && buttons.b1.innerHTML === buttons.b2.innerHTML && buttons.b2.innerHTML === buttons.b3.innerHTML){
    console.log(`player ${buttons.b1.innerHTML} won`);
    resultDiv.innerHTML = `player ${buttons.b1.innerHTML} won`
    reset();
   } else if(buttons.b4.innerHTML && buttons.b4.innerHTML === buttons.b5.innerHTML && buttons.b5.innerHTML === buttons.b6.innerHTML){
      console.log(`player ${buttons.b4.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b4.innerHTML} won`
      reset();
     } else if(buttons.b7.innerHTML && buttons.b7.innerHTML === buttons.b8.innerHTML && buttons.b8.innerHTML === buttons.b9.innerHTML){
      console.log(`player ${buttons.b7.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b7.innerHTML} won`
      reset();
     } else if(buttons.b1.innerHTML && buttons.b1.innerHTML === buttons.b4.innerHTML && buttons.b4.innerHTML === buttons.b7.innerHTML){
      console.log(`player ${buttons.b1.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b1.innerHTML} won`
      reset();
     } else if(buttons.b2.innerHTML && buttons.b2.innerHTML === buttons.b5.innerHTML && buttons.b5.innerHTML === buttons.b8.innerHTML){
      console.log(`player ${buttons.b2.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b2.innerHTML} won`
      reset();
     } else if(buttons.b3.innerHTML && buttons.b3.innerHTML === buttons.b6.innerHTML && buttons.b6.innerHTML === buttons.b9.innerHTML){
      console.log(`player ${buttons.b3.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b3.innerHTML} won`
      reset();
     } else if(buttons.b1.innerHTML && buttons.b1.innerHTML === buttons.b5.innerHTML && buttons.b5.innerHTML === buttons.b9.innerHTML){
      console.log(`player ${buttons.b1.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b1.innerHTML} won`
      reset();
     } else if(buttons.b3.innerHTML && buttons.b3.innerHTML === buttons.b5.innerHTML && buttons.b5.innerHTML === buttons.b7.innerHTML){
      console.log(`player ${buttons.b3.innerHTML} won`);
      resultDiv.innerHTML = `player ${buttons.b3.innerHTML} won`
      reset();
     } else{
      for(const key in buttons){
          button = buttons[key];
          if(button.innerHTML === ""){
         console.log("missing");
         break;
          }
      }
       if(button.innerHTML){
          console.log("Draw");
          resultDiv.innerHTML = "Draw"
           }
     }
       
}

const reset = ()=>{
  for(const key in buttons){
      button = buttons[key];
      button.innerHTML = "";
      button.disabled = false;
  }
}   