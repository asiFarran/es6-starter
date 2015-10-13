export class Person{
  constructor(first,last){
    this.first = first;
    this.last = last;
  }

  fullName(){
    return this.first + ' ' + this.last;
  }
}
