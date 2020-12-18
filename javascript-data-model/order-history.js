var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    price: '31.55',
    orderDate: '08/04/2020',
    itemName: 'JavaScript for impatient programmers',
    numberOfItems: '1',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    deliveryDate: '08/08/2020',
    lastDateReturn: '09/07/2020',
    shipTo: 'JS Masher'
  },
  {
    orderNumber: '113-9984268-1280257',
    price: '44.53',
    orderDate: '07/19/2020',
    itemName: 'The Timeless Way of Building',
    numberOfItems: '1',
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    deliveryDate: '07/20/2020',
    lastDateReturn: '08/19/2020',
    shipTo: 'JS Masher'
  },
  {
    orderNumber: '114-287557-9059409',
    price: '15.98',
    orderDate: '07/04/2020',
    itemName: 'Gamecube controller adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    numberOfItems: '1',
    title: 'Gamecube controller adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    author: null,
    deliveryDate: '07/07/2020',
    lastDateReturn: '08/05/2020',
    shipTo: 'JS Masher'
  },
  {
    orderNumber: '113-2883177-2648248',
    price: '138.93',
    orderDate: '07/03/2020',
    itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch),The Art of Sql',
    numberOfItems: '2',
    title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch), The Art of Sql',
    author: 'Faroult, Stephane',
    deliveryDate: '07/05/2020',
    lastDateReturn: '08/04/2020',
    shipTo: 'JS Masher'
  }
];

console.log('The author of The Art of Sql ', orderHistory[3].author);
console.log('The author of order 3 is ', orderHistory[2].author);
console.log('The order number of order 2 is ', orderHistory[1].orderNumber);
console.log('The order delivery date for order 3 is ', orderHistory[2].deliveryDate);
console.log('The return date for order 3 is ', orderHistory[2].lastDateReturn);
