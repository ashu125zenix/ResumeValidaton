function validate() {
 
    //first name

    var res1=document.getElementById("fname").value;
    if(res1.length==0) {
        document.getElementById("fname").style="border: 2px solid red";
        document.getElementById("msg1").innerHTML=" * First Name Field cannot be empty";
        return false;
    }
    else if(res1.length>15) {
        document.getElementById("fname").style="border: 2px solid red";
        document.getElementById("msg1").innerHTML=" * First Name cannot have more than 15 characters";
        return false;

    }
   else if(res1.length<3) {
       document.getElementById("fname").style="border: 2px solid red";
       document.getElementById("msg1").innerHTML=" * First Name should atleast have 3 characters";
       return false;
   }
   

//last name

var res2=document.getElementById("lname").value;
    if(res2.length==0) {
        document.getElementById("lname").style="border: 2px solid red";
        document.getElementById("msg2").innerHTML=" * Last Name Field cannot be empty";
        return false;
    }
    else if(res2.length>15) {
        document.getElementById("lname").style="border: 2px solid red";
        document.getElementById("msg2").innerHTML=" * Last Name cannot have more than 15 characters";
        return false;

    }
   else if(res2.length<2) {
       document.getElementById("lname").style="border: 2px solid red";
       document.getElementById("msg2").innerHTML=" * Last Name should atleast have 2 characters";
       return false;
   }

   //age

   var res3=document.getElementById("age").value;
    if(res3.length==0) {
        document.getElementById("age").style="border: 2px solid red";
        document.getElementById("msg3").innerHTML=" * Age Field cannot be empty";
        return false;
    }
    else if(res3>"40") {
        document.getElementById("age").style="border: 2px solid red";
        document.getElementById("msg3").innerHTML=" * Please enter valid age between 18 to 40";
        return false;

    }
    else if(res3<"18") {
        document.getElementById("age").style="border: 2px solid red";
        document.getElementById("msg3").innerHTML=" * Please enter valid age between 18 to 40";
        return false;

    }
   }
