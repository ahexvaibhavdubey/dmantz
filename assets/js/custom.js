
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onscroll=function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("bottom-btn").style.display = "block";
    }
    else {
        document.getElementById("bottom-btn").style.display = "none";
    }
}
//function topFunction() {
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}

function ContactSection(){
  var xhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Contact_Section";
        var registerReq = {
            firstname: document.getElementById("first_name").value,
            lastname: document.getElementById("cLname_box").value,
            email: document.getElementById("cEmail_box").value,
            country: document.getElementById("Country_box").value,
            subject: document.getElementById("Subject_box").value
        };

        /*var registerReq={firstname: "teja",
            lastname: "golusula",
            email: "teja1@gmail.com",
            password: "Teja@22",
        };*/
        var params = JSON.stringify(registerReq);
        console.log(params);
        var params = "inputJsonStr" + "=" + params;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function () {
            if ((this.readyState == 4) && (this.status == 200)) {
                console.log("after getting response" + xhttp.responseText);
                var jsonresponse = JSON.parse(this.responseText);
            }
        };
        xhttp.send(params);
 }   

