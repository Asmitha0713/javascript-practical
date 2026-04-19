# 💻 Day 3

### Exercise: Level 1

```js
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
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
```

1. Declare an _empty_ array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using _console.log()_
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name  to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using _sort()_ method
16. Reverse the array using _reverse()_ method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies

Answers:

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

   1. let array=[];

   2. let numbers = [10, 20, 30, 40, 50];

   3. console.log(numbers.length);

   4. let Firstitem = "Albania";
      let Middleitem ="Finland";
      let Lastitem ="Kenya";

      console.log("Albania");
      console.log("Finland");
      console.log("Kenya");

  5. const mixedDataTypes = [ 
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


  6. let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

  7. console.log(itCompanies);

  8. console.log(itCompanies.length);

  9. let Firstcompanies = "Facebook";
     let Middlecompanies ="Apple";
     let Lastcompanies="Amazon";
     console.log("Facebook");
     console.log("Apple");
     console.log("Amazon");

 10. itCompanies.forEach(company => {
     console.log(company);
     });

 11. for(let company of itCompanies) {
     console.log(company.toUpperCase());
     }
12. let sentence = itCompanies.slice(0, -1).join(", ") + " and " + itCompanies[itCompanies.length - 1] + " are big IT        companies.";

console.log(sentence);

13.   let company = "Google";

      if (itCompanies.includes(company)) {
        console.log(company);
      } else {
        console.log("a company is not found");
      }
14. let result = [];

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

15. itCompanies.sort();
console.log(itCompanies);

16. itCompanies.reverse();
console.log(itCompanies);

17. console.log(itCompanies.slice(0, 3));

18. console.log(itCompanies.slice(-3));

19. let mid = Math.floor(itCompanies.length / 2);

    if (itCompanies.length % 2 === 0) {
      console.log(itCompanies.slice(mid - 1, mid + 1));
    } else {
      console.log(itCompanies[mid]);
    }

20. itCompanies.shift();
    console.log(itCompanies);

21. let Mid = Math.floor(itCompanies.length / 2);

    if (itCompanies.length % 2 === 0) {
      itCompanies.splice(mid - 1, 2);
    } else {
      itCompanies.splice(mid, 1);
    }

    console.log(itCompanies);


22. itCompanies.pop();
    console.log(itCompanies);


 23. itCompanies = [];
    console.log(itCompanies);





### Exercise: Level 2

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
1. First remove all the punctuations and change the string to array and count the number of words in the array

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```
1. answer





1. In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
1. Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Exercise: Level 3

1. The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use _abs()_ method
1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

          let firstTenCountries = countries.slice(0, 10);
          console.log(firstTenCountries);

1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

                 let middleIndex = Math.floor(countries.length / 2);

                  let middleCountries;

                  if (countries.length % 2 === 0) {
                    middleCountries = countries.slice(middleIndex - 1, middleIndex + 1);
                  } else {
                    middleCountries = countries[middleIndex];
                  }

                  console.log(middleCountries);




2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

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




1. const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

     - let sortedAges = ages.sort((a, b) => a - b);

          let min = sortedAges[0];
          let max = sortedAges[sortedAges.length - 1];

          console.log("Sorted:", sortedAges);
          console.log("Min age:", min);
          console.log("Max age:", max);

      - let middle = Math.floor(sortedAges.length / 2);

        let median;

        if (sortedAges.length % 2 === 0) {
          median = (sortedAges[middle - 1] + sortedAges[middle]) / 2;
        } else {
          median = sortedAges[middle];
        }

        console.log("Median age:", median);
      

       - let sum = 0;

        for (let age of sortedAges) {
          sum += age;
        }

        let average = sum / sortedAges.length;

        console.log("Average age:", average);


       - let range = max - min;

          console.log("Range:", range);

      - let diffMin = Math.abs(min - average);
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







### Exercises: Level 4

  ```js
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
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```
1. Answers 
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

const webTechs = [
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






1. Iterate 0 to 10 using for loop, do the same using while and do while loop
2. Iterate 10 to 0 using for loop, do the same using while and do while loop
3. Iterate 0 to n using for loop
4. Write a loop that makes the following pattern using console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

  1. for loop
     for (let i = 0; i <= 10; i++) {
      console.log(i);
      }

      while loop

      let i = 0;
      while (i <= 10) {
      console.log(i);
       i++;
      }

      do while loop

      let j = 0;
      do {
        console.log(j);
        j++;
      } while (j <= 10);

      

  2. for loop
    for (let i = 10; i >= 0; i--) {
    console.log(i);
     }

     while loop

     let I = 10;
     while (i >= 0) {
      console.log(i);
        i--;
      }

    do while loop

    let J = 10;

    do {
      console.log(j);
      j--;
    } while (j >= 0);


   3. let n = 5; 

      for (let i = 0; i <= n; i++) {
        console.log(i);
      }
   
   4. for (let i = 1; i <= 7; i++) {
        let hash = "";

        for (let j = 1; j <= i; j++) {
          hash += "#";
        }

        console.log(hash);
      }






5. Use loop to print the following pattern:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

   5. answer
     for ( let i = 0; i <= 10; i++ ) {
     console.log(i + "*" + i +  " = " +(i *i));
     }


6. Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

6. answer
 console.log("i    i^2   i^3");
      for (let i = 0;  i <= 10;  i++ ){
          console.log( i + " " + ( i * i ) + "  "  + ( i * i * i) );
      }


7. Use for loop to iterate from 0 to 100 and print only even numbers
  answer:
     for (let i = 0; i <= 100 ; i++){
      if (i % 2 === 0){
        console.log(i);
      }
     }


8. Use for loop to iterate from 0 to 100 and print only odd numbers
    for (let i = 0; i <= 100; i++){
      console.log(i);
    }


9. Use for loop to iterate from 0 to 100 and print only prime numbers

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


10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```


let Sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);



11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```
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




12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
    ```

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);


13. Develop a small script which generate array of 5 random numbers

let RandomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);


14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomnumbers = [];

for (let i = 0; i < 5; ) {
  let num = Math.floor(Math.random() * 100);

  if (!randomNumbers.includes(num)) {
    randomNumbers.push(num);
    i++;
  }
}

console.log(randomNumbers);


15. Develop a small script which generate a six characters random id:

    ```sh
    5j2khz
    ```

let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars[randomIndex];
}

console.log(id);



### Exercises: Level 5

1. Develop a small script which generate any number of characters random id:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

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

1. Write a script which generates a random hexadecimal number.

    ```sh
    '#ee33df'
    ```

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


1. Write a script which generates a random rgb color number.

    ```sh
    rgb(240,180,80)
    ```
function generateRGB() {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 256); 
    rgb.push(value);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

console.log(generateRGB());



1. Using the above countries array, create the following new array.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```
const countries = [
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



1. Using the above countries array, create an array for countries length'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Use the countries array to create the following array of arrays:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```


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



2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```
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



3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```
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



4. Using the above countries array, find the country containing the biggest number of characters.

      ```sh
      Ethiopia
      ```
const longestCountry = countries.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestCountry);


5. Using the above countries array, find the country containing only 5 characters.

    ```sh
    ['Japan', 'Kenya']
    ```
const REsult = countries.filter(country => country.length === 5);
console.log(result);



6. Find the longest word in the webTechs array
const longestWord = webTechs.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestWord);



7. Use the webTechs array to create the following array of arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```
const RESULT = webTechs.map(tech => [tech, tech.length]);
console.log(result);



8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const acronym = mernStack.map(item => item[0]).join("");
console.log(acronym);


9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const WEbTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of webTechs) {
  console.log(tech);
}

10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon'];

let reversed = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversed.push(fruits[i]);
}

console.log(reversed);



11. Print all the elements of array as shown below.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```
const fullStack = [
['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
for (let j = 0; j < fullStack[i].length; j++) {
console.log(fullStack[i][j].toUpperCase());
}
}

### Exercises: Level 6

1. Copy countries array(Avoid mutation)
const sortedCountries = [...countries].sort();
console.log(sortedCountries);


1. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries


1. Sort the webTechs array and mernStack array
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);

1. Extract all the countries contain the word 'land' from the [countries array](/countries.js) and print it as array

const CountriesWithLand = countries.filter(country =>
  country.toLowerCase().includes("land")
);

console.log(CountriesWithLand);



1. Find the country containing the hightest number of characters in the [countries array](/countries.js)
const LongestCountry = countries.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(LongestCountry);

1. Extract all the countries contain the word 'land' from the [countries array](/countries.js) and print it as array
1. Extract all the countries containing only four characters from the [countries array](/countries.js) and print it as array
1. Extract all the countries containing two or more words from the [countries array](/countries.js) and print it as array
1. Reverse the [countries array](/countries.js) and capitalize each country and stored it as an array
  