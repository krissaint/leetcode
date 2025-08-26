/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let freq = new Map();
    for (let char of s) {
        if (freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
        } else {
            freq.set(char, 1);
        }
    }
    for (let char of t) {
        if (!freq.has(char)) return false;
        freq.set(char, freq.get(char) - 1);
        if (freq.get(char) < 0) return false;
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram")) // true    