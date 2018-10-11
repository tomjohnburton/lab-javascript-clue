var MrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};
var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
  occupation: "Actor"
};
var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};

var Rope = { name: "rope", weight: 10 };
var Knife = { name: "knife", weight: 8 };
var Candlestick = { name: "Candlestick", weight: 2 };
var Dumbbell = { name: "Dumbbell", weight: 30 };
var Poison = { name: "Poison", weight: 2 };
var Axe = { name: "axe", weight: 15 };
var Bat = { name: "bat", weight: 13 };
var Trophy = { name: "trophy", weight: 25 };
var Pistol = { name: "pistol", weight: 20 };


var roomsArray =
  ["DinningRoom",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "BilliardRoom",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "LivingRoom",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"];



// Characters Collection
var charactersArray = [];
charactersArray.push(MrGreen)
charactersArray.push(DrOrchid)
charactersArray.push(ProfPlum)
charactersArray.push(MissScarlet)
charactersArray.push(MrsPeacock)
charactersArray.push(MrMustard)

// Rooms' Collection
// var roomsArray = [];


// Weapons Collection
var weaponsArray = [];
weaponsArray.push(Rope)
weaponsArray.push(Knife)
weaponsArray.push(Candlestick)
weaponsArray.push(Dumbbell)
weaponsArray.push(Poison)
weaponsArray.push(Axe)
weaponsArray.push(Bat)
weaponsArray.push(Trophy)
weaponsArray.push(Pistol)

//Random Selector

function randomSelector (array) {
  var ranNum;
  ranNum = Math.floor(Math.random()*array.length);
  return array[ranNum];
}

function pickMistery () {
  var misteryEnvelope = [];
  var character = [];
  character = randomSelector(charactersArray)

  var room = []
  room = randomSelector(roomsArray)

  var weapon = []
  weapon = randomSelector(weaponsArray)

  misteryEnvelope.push(character)
  misteryEnvelope.push(weapon)
  misteryEnvelope.push(room)

  return misteryEnvelope
}


function revealMistery(ar) {
return console.log(ar[0].firstName, ar[0].lastName + ' killed Mr. Boddy using the '  + ar[1].name + ' in the ' + ar[2])
  
}

console.log(revealMistery(pickMistery()))

pickMistery()[1]






// function randomSelector () {
//   var player = [];

  // var character = [];
  // character = charactersArray[Math.floor(Math.random()*charactersArray.length)]
  // var room = []
  // room = roomsArray[Math.floor(Math.random()*roomsArray.length)]
  // var weapon = []
  // weapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)]

  // player.push(character)
  // player.push(weapon)
  // player.push(room)

//   // return player

