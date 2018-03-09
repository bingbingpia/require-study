require(['A', 'B', 'C', 'D', 'text!/text.html!strip', 'mytest!/text.html!strip'], function (A, B, C, D, text, mytest){
  // some code here
  console.log(A, B, C, 'x');
  console.log(A.add(1,1));
  console.log(B.foo());
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  div1.innerHTML = text;
  document.body.appendChild(div1);
  div2.innerHTML = mytest;
  document.body.appendChild(div2);
});