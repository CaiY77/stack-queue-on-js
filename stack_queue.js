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

    if (next == "(" || next == "{"){
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

console.log(bracketMatcher("(({{((hell)o))}}))"))
