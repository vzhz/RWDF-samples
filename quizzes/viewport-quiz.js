/*
You can create new instances of UdaciTests if you want
separately scoped collections of tests.
*/
var grader = new UdaciTests();

var tests = [
  {
    test: grader.isViewportSet,
    desc: "The viewport has been set correctly."
  }
];
window.onload = function() {
  runGradeLoop(grader, tests, "viewportsFTW!")
};