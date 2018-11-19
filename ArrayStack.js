class stack{

  constructor(){
  this.StackArray = [];
  }
  push(x){
    this.StackArray.push(x);
  }
  pop(){

    let x = this.StackArray.pop();
    return x
  }
  print(){
    for(let i = 0; i < this.StackArray.length; i++){
      console.log(this.StackArray[i]);
    }
  }
}

module.exports = stack;
