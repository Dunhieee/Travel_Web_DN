        showPics(0)
        function showPics(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
             if (i != n) {x[i].style.display = "none";}
          }
          x[n].style.display = "block";  
        }


        function showForm(){
          var x = document.getElementsByClassName("form_dktv");
          x[0].style.display = "flex";
        }

        function hideForm(){
          var x = document.getElementsByClassName("form_dktv");
          x[0].style.display = "none";
          removeInput()
          removeNotice()
          
        }
        
        function removeNotice(){
          var a = document.getElementById("hide_1")
          var b = document.getElementById("hide_2")
          a.style.display = "none"
          b.style.display = "none"
        }

        function removeInput(){
          document.getElementById("form_tv").reset();       
        }

        function sendForm_saleoff(){
          document.getElementById("form_km").reset(); 
          alert("Gửi thành công")
        }

        function sendForm(){
          var x = document.getElementById("name");
          var y = document.getElementById("email");
          var a = document.getElementById("hide_1")
          var b = document.getElementById("hide_2")
          if (x.value == ""){
            a.style.display = "block"
          }
          if (y.value == ""){
            b.style.display = "block"
          }
          if(x.value != "" && y.value != ""){
            hideForm()
            alert("Gửi thành công")
          }
        }