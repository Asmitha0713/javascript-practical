var firstName="Asmitha";
var lastName="Thavaradnam";
var Country="Srilanka";
var City="Kilinochchi";
var age=20;
var isMarried=false;
var year=2026;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(Country));
console.log(typeof(City));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


console.log(typeof '10' === typeof 10);

console.log(parseInt('9.8')==10);

console.log(Boolean(1));
console.log("hii");
console.log({});

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));



console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

console.log("python".length > "jargon".length);



        console.log(4 > 3 && 10 < 12);
        console.log(4 > 3 && 10 > 12);
        console.log(4 > 3 && 10 > 12);
        console.log(4 > 3 || 10 > 12);
        console.log(!(4 > 3));
        console.log(!(4 < 3));
        console.log( !(false));
        console.log(!(4 > 3 && 10 < 12));
        console.log(!(4 > 3 && 10 > 12));
        console.log(!(4 === '4'));



let now = new Date();
console.log(now);

// 1. Year today
console.log(now.getFullYear());

// 2. Month today as a number (0 - 11)
console.log(now.getMonth());

// 3. Date today
console.log(now.getDate());

// 4. Day today as a number (0 - 6)
console.log(now.getDay());

// 5. Hours now
console.log(now.getHours());

// 6. Minutes now
console.log(now.getMinutes());

// 7. Seconds elapsed from Jan 1, 1970 to now
console.log(Math.floor(now.getTime() / 1000));


let base = prompt ("Enter 20:");
let height =prompt ("Enter 10 :");

base = Number(20);
height = Number(10);

let area = 0.5 * base * height;

console.log("The area of the triangle is " + area);





const Base =20;
const Height=10;

const Area= 0.5 * base * height;

console.log("The area of the triangle is", Number.isInteger(area) ? area : area);



const sidea=5;
const sideb=4;
const sidec=3;
const perimeter = sidea + sideb + sidec;
console.log("The perimeter of the triangle is" , perimeter);


const length=
const width=