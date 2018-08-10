//function propmts the user for input and compares the values
var display=[]
function input(){

  var side1=parseInt(prompt("Enter the value of the first side"));
  var side2=parseInt(prompt("Enter the value of the second side"));
  var side3=parseInt(prompt("Enter the value of the third side"));

    display.push(side1,side2,side3)

  if(side1===side2&&side2===side3){
    alert("The values you have entered are:" +display+"\n"+"This is an equilateral triangle because all the sides are equal");
  }
  else if(side1===side2||side2===side3||side3===side1){
    alert("The values you have entered are:" +display+"\n"+"This is an Isosceles triangle as exactly two sides are equal");
  }
  else if((side1+side2)<=side3||(side2+side3)<=side1||(side1+side3)<=side2){
    alert("The values you have entered are:" +display+"\n"+"This is not a triangle as the sum of two sides is greater than the third side");
  }
  else if((side1+side2)>side3||(side2+side3)>side1||(side1+side3)>side2){
    alert("The values you have entered are:" +display +"\n"+"This is a scalene triangle as none of its sides are equal");
  }
  else
    (alert("The values you have entered are:" +display +"\n"+"Please enter a valid number"));
    window.location.reload();
}
//function propmts the user for input and compares the values
