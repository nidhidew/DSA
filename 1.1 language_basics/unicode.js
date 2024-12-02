// U+0000 to U+FFFF basic multilingual plane
console.log('basic multilingual plane ','\u0050');

// above U+FFFF Supplementary plane
console.log('Supplementary plane ','\u{1F650}');

//Accessing Characters
const str = '😀A';
console.log('using array for accessing: ',str[0]); //Incorrectly shows part of the surrogate pair
console.log('using spread operator in array for accessing: ',[...str][0]); //correctly shows

//length and surrogate pairs
const str2 = '😀';
console.log("returns the number of UTF-16 code units ",str2.length); // output:2

//correct iteration
for (const char of '😀A') {
    console.log("iteration ",char); // 😀, A
}

//Unicode regular expression
const regex = /./u;
console.log("using regualr expression for unicode ",regex.test('😀'));

const regex2 = /\p{Emoji}/u;
console.log("using \p{} syntax introduced in ES2018 ",regex2.test('😀'));

//unicode Normalization
const str3 = '\u0065\u0301'; // e + accent
console.log("using normalize to standardize string ",str3.normalize() === '\u00E9'); //true

//converting code points
console.log("to retrieve code points ",'😀'.codePointAt(0).toString(16)); // 1f600
console.log("to convert into character ",String.fromCodePoint(0x1F610)); // 😀

//unicode encoding
const encoder = new TextEncoder();
const uint8Array = encoder.encode('😀');
console.log(uint8Array); // Uint8Array with UTF-8 bytes

const decoder = new TextDecoder();
console.log(decoder.decode(uint8Array)); // 😀
