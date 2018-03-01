define(['A'], function (A) {
  function foo() {
    return A.add(2,2);
  }
  return {
    foo: foo
  };
});