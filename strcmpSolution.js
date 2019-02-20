const anagram = (strA, strB) => cleanStr(strA) === cleanStr(strB);

const cleanStr = (str) => str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

module.exports = {
    anagram
}