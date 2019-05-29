// Stacks and Queues Challenge: Bracket Matching
//
// Surely by now you've made an error in your code that seemed impossible to track down.
// But in the end, the root of all that trouble might have been something as simple as a missing (or extra) curly brace }.
// This example might be all too relatable (or painful)!
//
// One really convenient application for LIFO (Last In First Out) structures is matching brackets.
// That's because every time you encounter a closing bracket, it needs to match the most recently used open bracket.

class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty(){
    return this.items.length === 0
  }
}
class Queue{
  constructor() {
    this.items = [];
  }
  enqueue(data){
    this.items.unshift(data);
  }
  dequeue(){
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

const bracketMatcher = (string) => {
  let myStack = new Stack();
  let myQueue = new Queue();

  string.split('').forEach(char => {
    myQueue.enqueue(char);
  })

  while(!myQueue.isEmpty()){
    let next = myQueue.peek();

    if (next == "(" || next == "{" || next == "["){
      myStack.push(next)
      myQueue.dequeue();
    } else if (next == ")"){

      if(myStack.peek() == "("){
        myStack.pop();
        myQueue.dequeue();
      } else {
        return false;
      }

    } else if(next == "}"){
      if(myStack.peek() == "{"){
        myStack.pop();
        myQueue.dequeue();
      } else {
        return false;
      }
    } else if (next == "]"){

      if(myStack.peek() == "["){
        myStack.pop();
        myQueue.dequeue();
      } else {
        return false;
      }

    } else {
      myQueue.dequeue();
    }
  } //while

  if (myStack.isEmpty()){
    return true;
  }
  else {
    return false;
  }
}

console.log(bracketMatcher("(({{(([]hello))}}))"))
