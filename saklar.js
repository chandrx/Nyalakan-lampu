           
           function saklar(){
            let AcceptConditions1 = document.getElementById("AcceptConditions1")
            let AcceptConditions2 = document.getElementById("AcceptConditions2")
            let AcceptConditions3 = document.getElementById("AcceptConditions3")

            let lampu1 = document.getElementById("lampu1");
            let lampu2 = document.getElementById("lampu2");
            let lampu3 = document.getElementById("lampu3");


            if (AcceptConditions1.checked) {
                   lampu1.src = "assets/images/lampu-nyala.png"
                  }
             else {
               lampu1.src = "assets/images/lampu-mati.png"
               }

               if (AcceptConditions2.checked) {
                  lampu2.src = "assets/images/lampu-nyala.png"
                 }
            else {
              lampu2.src = "assets/images/lampu-mati.png"
              }

              if (AcceptConditions3.checked) {
               lampu3.src = "assets/images/lampu-nyala.png"
              }
         else {
           lampu3.src = "assets/images/lampu-mati.png"
           }
            }