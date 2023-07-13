
function removeNotice(i){
    var a = document.getElementsByClassName("hide_1")
    var x = document.getElementsByClassName("value");
    if (x[i].value == ""){            
        a[i].style.display = "block"
      }
      else{
        a[i].style.display = "none"
      }
}

  function removeInput(){
    document.getElementById("form").reset();       
  }

 

  function sendForm(){
   
    var i;
    var x = document.getElementsByClassName("value");
    var a = document.getElementsByClassName("hide_1")
    var check = 1;
    for (i = 0; i < x.length; i++){
        if (x[i].value == ""){            
            a[i].style.display = "block"
            check = 0;
          }
          else{
            a[i].style.display = "none"
          }
    }
    if(check == 1){
        alert("Gửi thành công, chúng tôi sẽ liên lạc với bạn trong 24h tới!")
        removeInput()
    }
}