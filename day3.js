const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
console.log(countries.length);


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
console.log(webTechs.length);

let array=[];

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

let Firstitem = "Albania";
let Middleitem ="Finland";
let Lastitem ="Kenya";

console.log("Albania");
console.log("Finland");
console.log("Kenya");



const mixedDataTypes = [ 
    "Hello", 
     100,          
     true,         
    null,         
    { name: "Ash" }, 
    [1, 2, 3],    
    undefined     
];

console.log("Array:", mixedDataTypes);
console.log("Length of array:", mixedDataTypes.length);



let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);

let Firstcompanies = "Facebook";
let Middlecompanies ="Apple";
let Lastcompanies="Amazon";
console.log("Facebook");
console.log("Apple");
console.log("Amazon");

itCompanies.forEach(company => {
  console.log(company);
});

 for(let company of itCompanies) {
  console.log(company.toUpperCase());
}



let sentence = itCompanies.slice(0, -1).join(", ") + " and " + itCompanies[itCompanies.length - 1] + " are big IT companies.";

console.log(sentence);




let company = "Google";

if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("a company is not found");
}


let result = [];

for (let company of itCompanies) {
  let count = 0;

  for (let char of company.toLowerCase()) {
    if (char === "o") {
      count++;
    }
  }

  if (count > 1) {
    result.push(company);
  }
}

console.log(result);


itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);


console.log(itCompanies.slice(0, 3));


console.log(itCompanies.slice(-3));


let mid = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(mid - 1, mid + 1));
} else {
  console.log(itCompanies[mid]);
}

itCompanies.shift();
console.log(itCompanies);


let Mid = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 0) {
  itCompanies.splice(mid - 1, 2);
} else {
  itCompanies.splice(mid, 1);
}

console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);


itCompanies = [];
console.log(itCompanies);
























const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sortedAges = ages.sort((a, b) => a - b);

let min = sortedAges[0];
let max = sortedAges[sortedAges.length - 1];

console.log("Sorted:", sortedAges);
console.log("Min age:", min);
console.log("Max age:", max);


let middle = Math.floor(sortedAges.length / 2);

        let median;

        if (sortedAges.length % 2 === 0) {
          median = (sortedAges[middle - 1] + sortedAges[middle]) / 2;
        } else {
          median = sortedAges[middle];
        }

        console.log("Median age:", median);


        let sum = 0;

for (let age of sortedAges) {
  sum += age;
}

let average = sum / sortedAges.length;

console.log("Average age:", average);



let range = max - min;

console.log("Range:", range);



let diffMin = Math.abs(min - average);
let diffMax = Math.abs(max - average);

console.log("Abs(min - average):", diffMin);
console.log("Abs(max - average):", diffMax);

if (diffMin > diffMax) {
  console.log("min is farther from average");
} else if (diffMax > diffMin) {
  console.log("max is farther from average");
} else {
  console.log("both are equal distance from average");
}




let firstTenCountries = countries.slice(0, 10);
          console.log(firstTenCountries);





let middleIndex = Math.floor(countries.length / 2);

let middleCountries;

if (countries.length % 2 === 0) {
  middleCountries = countries.slice(middleIndex - 1, middleIndex + 1);
} else {
  middleCountries = countries[middleIndex];
}

console.log(middleCountries);





let MID = Math.floor(countries.length / 2);

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, mid);
  secondHalf = countries.slice(mid);
} else {
  firstHalf = countries.slice(0, mid + 1);
  secondHalf = countries.slice(mid + 1);
}

console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);











const Countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const WebTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

console.log(countries);
console.log(webTechs);
console.log(mernStack);



   
     for (let i = 0; i <= 10; i++) {
      console.log(i);
      }

 

      let i = 0;
      while (i <= 10) {
      console.log(i);
       i++;
      }

  

      let j = 0;
      do {
        console.log(j);
        j++;
      } while (j <= 10);




    for (let i = 10; i >= 0; i--) {
    console.log(i);
     }

     let I = 10;
     while (i >= 0) {
      console.log(i);
        i--;
      }


      let J = 10;

do {
  console.log(j);
  j--;
} while (j >= 0);




let n = 5; 

for (let i = 0; i <= n; i++) {
  console.log(i);
}



for (let i = 1; i <= 7; i++) {
  let hash = "";

  for (let j = 1; j <= i; j++) {
    hash += "#";
  }

  console.log(hash);
}




for ( let i = 0; i <= 10; i++ ) {
    console.log(i + "*" + i +  " = " +(i *i));
}



console.log("i    i^2   i^3");
for (let i = 0;  i <= 10;  i++ ){
    console.log( i + " " + ( i * i ) + "  "  + ( i * i * i) );
}


 for (let i= 0 ; i <= 100 ; i++){
      if (i % 2 === 0){
        console.log(i);
      }
     }

     for (let i = 0; i <= 100; i++){
      console.log(i);
    }

    for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}


let Sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);







let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);





let RandomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);



let randomnumbers = [];

for (let i = 0; i < 5; ) {
  let num = Math.floor(Math.random() * 100);

  if (!randomNumbers.includes(num)) {
    randomNumbers.push(num);
    i++;
  }
}



let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars[randomIndex];
}

console.log(id);



function generateRandomId(length) {
  let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }

  return id;
}

console.log(generateRandomId(12));  
console.log(generateRandomId(24));  




function generateHex() {
  let hexChars = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }

  return color;
}

console.log(generateHex());



function generateRGB() {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 256); 
    rgb.push(value);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

console.log(generateRGB()); 



const COuntries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

const upperCaseCountries = [];

for (let i = 0; i < countries.length; i++) {
  upperCaseCountries.push(countries[i].toUpperCase());
}

console.log(upperCaseCountries);




const counTries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya"
];

let Result = [];

for (let i = 0; i < countries.length; i++) {
  let country = countries[i];

  result.push([
    country,
    country.slice(0, 3).toUpperCase(),
    country.length
  ]);
}

console.log(result);


let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes("land")) {
    countriesWithLand.push(countries[i]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log("All these countries are without land");
}



let countriesEndsWithIa = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().endsWith("ia")) {
    countriesEndsWithIa.push(countries[i]);
  }
}

if (countriesEndsWithIa.length > 0) {
  console.log(countriesEndsWithIa);
} else {
  console.log("These are countries ends without ia");
}


const longestCountry = countries.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestCountry);


const REsult = countries.filter(country => country.length === 5);
console.log(result);


const longestWord = webTechs.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestWord);


const RESULT = webTechs.map(tech => [tech, tech.length]);
console.log(result);

const acronym = mernStack.map(item => item[0]).join("");
console.log(acronym);




const WEbTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of webTechs) {
  console.log(tech);
}



const fruits = ['banana', 'orange', 'mango', 'lemon'];

let reversed = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversed.push(fruits[i]);
}

console.log(reversed);



const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase());
  }
}


const sortedCountries = [...countries].sort();
console.log(sortedCountries);


const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);

const CountriesWithLand = countries.filter(country =>
  country.toLowerCase().includes("land")
);

console.log(CountriesWithLand);


const LongestCountry = countries.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(LongestCountry);

