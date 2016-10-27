function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var mappedAncestry = ancestry.map(function(person){
  var mother = byName[person.mother];

  if (mother) {
	return person.born - mother.born;
  } else {
  	return null;
  }
});

var filteredAncestry = mappedAncestry.filter(function(age){
  if (!null) {
    return age;
  }
});

console.log(average(filteredAncestry));


// → 31.2
