let s = "abcabcbb";
let start = 0;
let maxLength = 0;
let seen = {}; // to store characters and their latest index
for (let end = 0; end < s.length; end++) {
    let char = s[end];
    console.log(seen[char])
    
    if (seen[char] !== undefined && seen[char] >= start) {
        start = seen[char] + 1;
    }

    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
}
console.log(maxLength);
