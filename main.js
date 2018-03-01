console.log("加载成功！");
require(['A', 'B', 'C', 'D', 'text!/text.html!strip'], function (A, B, C, D, text){
  // some code here
  console.log(A, B, C, 'x');
  console.log(A.add(1,1));
  console.log(B.foo());
});