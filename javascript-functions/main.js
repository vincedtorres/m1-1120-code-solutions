function convertMinutesToSeconds(minutes) {
  var convertMinutesToSeconds = (minutes * 60);
  return convertMinutesToSeconds;
}

console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greet = 'Hey, ' + name;
  return greet;
}

console.log(greet('Beavis'));

function getArea(width, height) {
  var getArea = width * height;
  return getArea;
}

console.log(getArea(17, 42));

function getFirstName(person) {

  var getFirstName = person.firstName;
  return getFirstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
