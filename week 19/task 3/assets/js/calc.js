let result;
        let number1;
        let number2;
    
        function plus() { 
        getValues ();
        result = number1 + number2; 
        showResultHTML();
    }
    
    function minus() {
        getValues ();
        result = number1 - number2;
        showResultHTML();
    }
    
    function times() {
        getValues ();
        result = number1 * number2;
        showResultHTML();
    }
    
    function divide() {
        getValues ();
        result = number1 / number2;
        if (number2 === 0) {
            alert("На ноль делить нельзя")
        }
        showResultHTML();
    }
    
    function getValues () {
        number1 =Number(document.getElementById("number1").value);
        number2 =Number(document.getElementById("number2").value);
    }
    
    function showResultHTML() {
        document.getElementById("result").value = result;
    }


    //function divide() {
     //   getValues ();
     //   result = number1 / number2;
      //  if (number2 === 0) {
     //       alert("На ноль делить нельзя")
     //  }
     //   showResultHTML();
 //  }//