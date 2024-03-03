// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
function multiply(x, y = 1) {
  return x * y;
}
multiply(3, 4); //12
multiply(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {
  ...catDog
}]


///////////////////////////////////////////////////////////////////////////////////////////////////////////



//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)


////////////////////////////////////////////////////////////////////////////////////////////////////



// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const runner = {
  firstt: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {
//   first,
//   last,
//   time
// } = runner;

const {
  country: nation,
  title: honorific
} = runner;

const {
  firstt,
  last,
  ...other
} = runner;


//////////////////////////////////////////////////////////////////////////////////////////////////////////


const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]
// NESTED DESTRUCTURING
const [{
  first: goldWinner
}, {
  country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"


//////////////////////////////////////////////////////////////////////////////////////////////////////////



const runnerr = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
// function print(person) {
//   const {
//     first,
//     last,
//     title
//   } = person;
//   console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({
  first,
  last,
  title
}) {
  console.log(`${first} ${last}, ${title}`)
}

const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json',
]

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function selamVer(isim = 'Misafir') {
  console.log(`Merhaba, ${isim}!`);
}

selamVer(); // Çıktı: Merhaba, Misafir!
selamVer('Ahmet'); // Çıktı: Merhaba, Ahmet!


function toplam(a, b = 0) {
  return a + b;
}

console.log(toplam(5, 3)); // Çıktı: 8
console.log(toplam(5));    // Çıktı: 5
console.log(toplam(5, undefined)); // Çıktı: 5
console.log(toplam(5, null)); // Çıktı: 5 (null, 0 olarak değerlendirilir)




// Dizilerde Kullanım:

const dizi1 = [1, 2, 3];
const dizi2 = [...dizi1, 4, 5, 6];

console.log(dizi2); // Çıktı: [1, 2, 3, 4, 5, 6]





// Fonksiyon Parametrelerinde Kullanım:

function toplam(a, b, c) {
  return a + b + c;
}

const sayilar = [1, 2, 3];

console.log(toplam(...sayilar)); // Çıktı: 6




// Nesnelerde Kullanım:

const nesne1 = { a: 1, b: 2 };
const nesne2 = { ...nesne1, c: 3, d: 4 };

console.log(nesne2); // Çıktı: { a: 1, b: 2, c: 3, d: 4 }




// Dizileri Birleştirme:


const dizii1 = [1, 2, 3];
const dizii2 = [4, 5, 6];
const birlesikDizi = [...dizii1, ...dizii2];

console.log(birlesikDizi); // Çıktı: [1, 2, 3, 4, 5, 6]




// Dizi Kopyalama:

const orijinalDizi = [1, 2, 3];
const kopyaDizi = [...orijinalDizi];

console.log(kopyaDizi); // Çıktı: [1, 2, 3]




// Dizilerde Kullanım:

const dizi = [1, 2, 3];

const [a, b, c] = dizi;

console.log(a); // Çıktı: 1
console.log(b); // Çıktı: 2
console.log(c); // Çıktı: 3




//Nesnelerde Kullanım:

const nesne = { x: 1, y: 2, z: 3 };

const { x, y, z } = nesne;

console.log(x); // Çıktı: 1
console.log(y); // Çıktı: 2
console.log(z); // Çıktı: 3




// Fonksiyon Parametrelerinde Kullanım:

function fonksiyon({ x, y }) {
  console.log(x, y);
}

const nesnee = { x: 1, y: 2 };

fonksiyon(nesnee); // Çıktı: 1 2






// Dizilerde Geriye Kalan Elemanları Yakalama:

const dizzi = [1, 2, 3, 4, 5];

const [ilkEleman, ...geriyeKalanElemanlar] = dizzi;

console.log(ilkEleman); // Çıktı: 1
console.log(geriyeKalanElemanlar); // Çıktı: [2, 3, 4, 5]


//rest

function toplam(...sayilar) {
  let toplam = 0;
  for (let sayi of sayilar) {
    toplam += sayi;
  }
  return toplam;
}

console.log(toplam(1, 2, 3)); // Çıktı: 6
console.log(toplam(1, 2, 3, 4, 5)); // Çıktı: 15




function toplam(metin, ...sayilar) {
  let toplam = 0;
  for (let sayi of sayilar) {
    toplam += sayi;
  }
  return `${metin}: ${toplam}`;
}

console.log(toplam("Toplam", 1, 2, 3)); // Çıktı: Toplam: 6
console.log(toplam("Sonuç", 1, 2, 3, 4, 5)); // Çıktı: Sonuç: 15
