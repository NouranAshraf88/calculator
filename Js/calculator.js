function insert(num){
document.form.display.value = document.form.display.value+num;
}
function equal(){
    var sum = document.form.display.value;
    if (sum){
       document.form.display.value = eval(sum); 
    }
}
function clean(){
    document.form.display.value ='';
}
  function back(){
   var del = document.form.display.value;
   document.form.display.value = del.substring(0,del.length - 1);
  }