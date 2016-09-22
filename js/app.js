
var f = DoProcess;

function DoProcess(a, b) {

  function childProcessSum() {
    alert("The sum is: " + (a+b).toString());
  }

  childProcessSum();

}
