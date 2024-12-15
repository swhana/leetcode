/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const stMap = new Map();
    const tsMap = new Map();
    
    for(let i=0; i<s.length; i++) {
        if(!stMap.has(s[i])) {
            stMap.set(s[i], t[i]); // s[i] : t[i] mapping
        }

        if(!tsMap.has(t[i])) {
            tsMap.set(t[i], s[i]);
        }

        if(stMap.get(s[i]) !== t[i]) return false;  
        if(tsMap.get(t[i]) !== s[i]) return false;
    }

    return true;
};