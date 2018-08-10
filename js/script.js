function input(){

  var side1=parseInt(prompt("Enter the value of the first side"));
  var side2=parseInt(prompt("Enter the value of the second side"));
  var side3=parseInt(prompt("Enter the value of the third side"));

  if(side1===side2&&side2===side3){
    alert("This is an equilateral triangle because all the sides are equal");
  }
  else if(side1===side2||side2===side3||side3===side1){
    alert("This is an Isosceles triangle as exactly two sides are equal");
  }
  else if(side1!==side2&&side2!==side3){
    alert("This is a scalene triangle as none of its sides are equal");
  }
}
