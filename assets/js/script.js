/* Menu Hb */
  function openHamburger() {
    document.querySelector(".hbContent").style.display="flex";
    document.querySelector("#menuHamburger").style.width = "100%";
    document.querySelector("#menuHamburger").style.display="unset";
    document.querySelector("#menuHamburger").style.transition="0.5s";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }
  function closeHamburger() {
    document.querySelector("#menuHamburger").style.width = "0";
    document.querySelector("#menuHamburger").style.transition="0.5s";
    document.querySelector(".hbContent").style.display="none";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }



  function verif(event){

  let regex= /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,8}$/;
  let email = document.querySelector("input[name=email]").value;

  if(!regex.test(email)){
    console.log("Erreur")
    colorInput(document.querySelector("input[name=email]"), false)
    event.preventDefault()
  }
  else{
    colorInput(document.querySelector("input[name=email]"), true)
    console.log("Ok !")
    event.preventDefault()
  }

  }

  function colorInput(input, isValid){

    if(isValid){
        input.style.backgroundColor = "#D6EFD1" ;
    }
    else{
        input.style.backgroundColor = "#fba" ;
    }
}




  document.addEventListener("DOMContentLoaded", function(){

    let form = document.querySelector("form");
    form.addEventListener('submit', verif);
})