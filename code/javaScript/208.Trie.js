/**
 * Initialize your data structure here.
 */
let TrieNode = function () {
  this.map = new Map();
};

let Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let w of word) {
    if (node.map.has(w)) {
      node = node.map.get(w);
    } else {
      node.map.set(w, new TrieNode());
      node = node.map.get(w);
    }
  }
  node.map.set("0", new TrieNode());
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let w of word) {
    if (!node.map.has(w)) {
      return false;
    }
    node = node.map.get(w);
  }
  return node.map.get("0");
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let w of prefix) {
    if (!node.map.has(w)) {
      return false;
    }
    node = node.map.get(w);
  }
  return true;
};
