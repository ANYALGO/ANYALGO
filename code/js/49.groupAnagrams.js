/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i=0;i<strs.length;i++){
        let word = strs[i].split('').sort().join('');
        if(map.has(word)){
            map.get(word).push(strs[i]);
        }else{
            map.set(word,[strs[i]]);
        }
    }
    return Array.from(map.values());
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));