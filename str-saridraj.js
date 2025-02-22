function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    var prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// test case 1
const strs1 = ["flower", "flow", "flight"];
console.log("result: ",longestCommonPrefix(strs1));  // Output: "fl"

// test case 2
const strs2 = ["dog", "racecar", "car"];
console.log("result: ",longestCommonPrefix(strs2));  // Output: ""
