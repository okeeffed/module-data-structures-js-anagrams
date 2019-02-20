const anagram = (strA, strB) => {
    // use regexp to remove spaces and grammar
    const cmpA = strA
        .replace(/[^\w]/g, '')
        .toLowerCase();
    const cmpB = strB
        .replace(/[^\w]/g, '')
        .toLowerCase();

    // ensure same number of keys
    console.log(cmpA);
    console.log(cmpB);
    if (cmpA.length !== cmpB.length) {
        return false;
    }

    let charMapA = {};
    let charMapB = {};
    for (let i in cmpA) {
        if (!charMapA[cmpA[i]]) {
            charMapA[cmpA[i]] = 1;
        } else {
            charMapA[cmpA[i]] = charMapA[cmpA[i]]++;
        }

        if (!charMapB[cmpB[i]]) {
            charMapB[cmpB[i]] = 1;
        } else {
            charMapB[cmpB[i]] = charMapB[cmpB[i]]++;
        }
    }

    const keysA = Object.keys(charMapA);
    const keysB = Object.keys(charMapB);

    console.log(keysA)
    console.log(keysB)

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let k in keysA) {
        if (typeof keysB[k] === 'undefined') {
            return false;
        }

        if (keysA[k] !== keysB[k]) {
            return false;
        }
    }

    return true;
}

module.exports = {
    anagram
}