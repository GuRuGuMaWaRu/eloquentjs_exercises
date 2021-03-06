function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
var sorted = {},
    century = 0;

ancestry.map(function(person) {
  century = Math.ceil(person.died/100);
  if (!sorted[century]) {
    sorted[century] = [];
  }
  sorted[century].push(person.died - person.born);
});

function groupBy(arr, fn) {
  var obj = {};

  for (var i = 0, len = arr.length; i < len; i++) {
  	var category = fn(arr[i]);
    if (!obj[category]) {
      obj[category] = [];
    } else {
      obj[category].push(arr[i]);
    }
  }
  return obj;
}

for (key in sorted) {
  console.log(key + ": " + +(Math.round(average(sorted[key]) + "e+1") + "e-1"));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
