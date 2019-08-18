class Dog{
  constructor(name:string){
    // this.name = name
  }
  name:string = 'dog'
  run(){}
  // private pri()
  readonly legs: number = 4
  static food='bananer'
}  
//类成员的属性都是实例属性 而不是原型属性


//name属性在实例上不在原型上

// 类的属性 必须要有初始值

// 类成员的方法是实例方法
console.log('constructor', Dog.prototype)
let dog = new Dog('wang')
console.log(dog)
// dog.pri()
console.log(Dog.food)
class hus extends Dog{
  constructor(name:string,public color:string)  {
    super(name)
    this.color = color
  }
  // color:string
}

//写为public 的话 可以省下 color：string 

//类的成员修饰符





//私有成员 只能被类本身调用 不能被类的实例调用  子类调用

// private constructor 既不能被实例化 也不能被继承

// protected 只能在类中被访问 不能被实例化 只能被继承


//readonly  一定要被初始化， 构造参数

//static  不能被访问  只能被继承？ 


//抽象类  只能被继承 不能被实例化
abstract class Animal{
  eat(){

  }
  abstract sleep(): void
}

class Dog1 extends Animal{
  constructor(){
    super()
  }
  sleep(){

  }
}
// 非抽象类“Dog1”不会实现继承自“Animal”类的抽象成员“sleep”。

class Cat extends Animal{
  sleep(){
    console.log('cat sleep')
  }
}

//多态 与 静态方法 
let dog1 = new Dog1();
let cat = new Cat();

let animal: Animal[]  = [dog1, cat];

animal.forEach(i=>{
  i.sleep();
})


//方法的链式调用
class WorkFlow{
  step1(){
    return this
  }
  step2(){
    return this
  }
}
// class 返回的this 很容易链式调用 

new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
  next(){
    return this;
  }
}

new  Myflow().next().step1().step2();