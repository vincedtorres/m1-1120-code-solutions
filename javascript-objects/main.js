var student = {
  firstName: 'Vincent',
  lastName: ' Torres',
  age: 36
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'debt negotiator';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);

var vehicle = {
  make: 'Cadillac',
  model: 'ELR',
  year: 2016
};

vehicle.color = 'black';
vehicle.isConvertible = false;
console.log('value of vehicle.color', vehicle.color);
console.log('value of vehicle.isConvertible', vehicle.isConvertible);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Haley',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
