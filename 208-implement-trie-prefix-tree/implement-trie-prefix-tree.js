
var Node = function() {
    this.children = {};
    this.endOfWord = false;
}


var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    
    for(let i of word) {
        let node = curr.children[i];
        if(node === undefined) {
            node = new Node();
            curr.children[i] = node;
        }
        curr = node;
    }

    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;

    for(let i of word) {
        let node = curr.children[i];
        if(node === undefined) return false;
        curr = node;
    }

    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;

    for(let i of prefix) {
        let node = curr.children[i];
        if(node === undefined) return false;
        curr = node;
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */