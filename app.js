function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
// function hasKnownMother(person) {
//   return person.mother;
// }

// var filteredAncestry = ancestry.filter(hasKnownMother);
// console.log(filteredAncestry.length);

var mappedAncestry = ancestry.map(function(person){
  if (person.mother) {
    console.log(byName[person.mother]);
	return person.born;
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
