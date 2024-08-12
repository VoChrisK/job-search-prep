class Node {
  children: Array<Node>;
  value: String;


  constructor(value: String) {
      this.children = [];
      this.value = value;
  }


  addChild(child: Node): void {
      this.children.push(child);
  }


  getChild(char: String): Node {
      for(let i = 0; i < this.children.length; i++) {
          if (this.children[i].value === char) {
              return this.children[i];
          }
      }


      return null;
  }
}


class Trie {
  root: Node


  constructor() {
      this.root = new Node("");
  }


  insert(word: string): void {
      let chars = word.split("");
      let ptr = this.root;


      chars.forEach((char) => {
          let newNode = new Node(char);
          let child = ptr.getChild(char);


          if (child) {
              ptr = child;
          } else {
              ptr.addChild(newNode);
              ptr = newNode;
          }
      })


      ptr.addChild(new Node(""));
  }


  search(word: string): boolean {
      let chars = word.split("");
      let ptr = this.root;


      for(let i = 0; i < chars.length; i++) {
          let nextNode = ptr.getChild(chars[i]);


          if (nextNode) {
              ptr = nextNode;
          } else {
              return false;
          }
      }


      return Boolean(ptr.getChild(""));
  }


  startsWith(prefix: string): boolean {
      let chars = prefix.split("");
      let ptr = this.root;


      for(let i = 0; i < chars.length; i++) {
          let nextNode = ptr.getChild(chars[i]);


          if (nextNode) {
              ptr = nextNode;
          } else {
              return false;
          }
      }


      return true;
  }
}


/*
  for insert, we need to insert each char in the trie
  each subsequent char is a child of the previous char


  root
      \
       a
        \
         p
          \
           p
            \
             l
              \
               e




  for search, we check for each char.
  traverse down for each match


  for startswith, same thing as search


*/
