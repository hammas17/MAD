// 1 charAt()
const str1 = "JS";
const char = str1.charAt(2);
console.log(char); 

// 2 charCodeAt()
const str2 = "javascript";
const unicode = str2.charCodeAt(7);
console.log(unicode); 

// 3 concat()
const str3 = "Hammas";
const str4 = "Ali";
const concatenated = str3.concat(", ", str4);
console.log(concatenated); 

// 4 constructor
const str5 = "Hammas";
const constructor = str5.constructor;
console.log(constructor); 

// 5 endsWith()
const str6 = "Comsats Attock";
const endsWithWorld = str6.endsWith("Attock");
console.log(endsWithWorld); 

// 6 fromCharCode()
const unicodeValues = [91, 111, 192, 192, 111];
const str7 = String.fromCharCode(...unicodeValues);
console.log(str7); 

// 7 includes()
const str8 = "Hammas Ali Malik";
const containsFaryab = str8.includes("Faryab");
console.log(containsFaryab);

// 8 indexOf()
const str9 = "Hammas Ali Malik";
const index = str9.indexOf("is");
console.log(index); 

// 9 lastIndexOf()
const str10 = "Hammas Ali Malik";
const lastIndex = str10.lastIndexOf("Malik");
console.log(lastIndex); // Output: 6

// 10 length
const str11 = "I am Student of Comsats";
const length = str11.length;
console.log(length); 

// 11 localeCompare()
const str12 = "Hammas";
const str13 = "Malik";
const comparison = str12.localeCompare(str13);
console.log(comparison); 

// 12 match()
const str14 = "Javascript and html";
const matches = str14.match(/o/g);
console.log(matches); 

// 13 repeat()
const str15 = "Hammas";
const repeated = str15.repeat(3);
console.log(repeated); 

// 14 replace()
const str16 = "Html CSS";
const replaced = str16.replace("MAD", "PROGRAMMING");
console.log(replaced); 

// 15 replaceAll()
const str17 = "Javascript HTML React.js";
const replacedAll = str17.replaceAll("HTML", "PROGRAMMING");
console.log(replacedAll); 

// 16 search()
const str18 = "Hammas Ali Malik";
const searchResult = str18.search("Hammas");
console.log(searchResult); 

// 17 slice()
const str19 = "HTML CSS";
const sliced = str19.slice(17, 10);
console.log(sliced); 

// 18 split()
const str20 = "Hello, World!";
const parts = str20.split(" ");
console.log(parts); 

// 19 startsWith()
const str21 = "Hammas Ali Malik";
const startsWithHello = str21.startsWith("Hammas");
console.log(startsWithHello);

// 20 substr()
const str22 = "React.js";
const subString = str22.substr(0, 5);
console.log(subString); // Output: "React"

// 21 substring()
const str23 = "Hello, World!";
const subString2 = str23.substring(7, 12);
console.log(subString2);

// 22 toLocaleLowerCase()
const str24 = "PROGRAMMING";
const lowerCase = str24.toLocaleLowerCase();
console.log(lowerCase); 

// 23 toLocaleUpperCase()
const str25 = "machine learning";
const upperCase = str25.toLocaleUpperCase();
console.log(upperCase); 

// 24 toLowerCase()
const str26 = "HTML CSS JAVASCRIPT";
const lowerCase2 = str26.toLowerCase();
console.log(lowerCase2); 

// 25 toString()
const str27 = "javascript";
const strToString = str27.toString();
console.log(strToString); 

// 26 toUpperCase()
const str28 = "mobile application development";
const upperCase2 = str28.toUpperCase();
console.log(upperCase2); 

// 27 trim()
const str29 = "   Javascript Programming   ";
const trimmed = str29.trim();
console.log(trimmed); 

// 28 trimEnd()
const str30 = "   Hello, World!   ";
const trimmedEnd = str30.trimEnd();
console.log(trimmedEnd); 

// 29 trimStart()
const str31 = "   Horses , Reading   ";
const trimmedStart = str31.trimStart();
console.log(trimmedStart); 

// 30 valueOf()
const str32 = new String("Hammas");
const primitiveValue = str32.valueOf();
console.log(primitiveValue); 