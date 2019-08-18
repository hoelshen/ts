let a = 1;
let b = [1, null]

let c = (x =1 ) => x + 1

//从左到右  上下文推断

window.onkeydown = (event)=>{
  console.log(event.button)
}

interface Foo{
  bar: number
}

//let foo = {} as Foo
let foo:Foo = {}
//foo.bar = 1


//类型的兼容性为题 x 兼容 y: x（目标类型） = y（源类型）
let s = string  ='a';
s = null


interface X {
  a:any;
  b:any;

}
interface Y {
  a:any;
  b:any;
  c:any
}

let x :X = {a:1, b:2}
let y :Y = {a:1, b:2, c:3}
x= y

// 函数的兼容性
type Handler = (a:number, b:number) => void

function hof(handler: Handler){
  return handler
}
//1) 参数个数
let handler1 = (a:number)=>{}
hof(handler1)
let handler2 = (a:number,b: number, c:number)=>{}
// hof(handler2)

//可选参数和剩余参数
let a = (p1:number,p2:number)=>{}
let b = (p1?:number,p2?: number)=>{}
let c = (...args: number[])=>{}

a= b;
a =c;
b =c; //不行 可选参数不能兼容剩余参数

//2) 参数类型
let handler3 = (a:string)=>{}
// hof(handler3)


interface Point3D{
  x: number
  y: number
  z: number
}
interface Point2D{
  x: number
  y: number
}

let p3d = (point:Point3D) =>{}
let p2d = (point:Point2D) =>{}

p3d = p2d;
// p2d = p3d; 报错 数据多的不能赋值给数据少的


//3）返回值类型
 let f = () => ({name: 'Alice'})
 let g = () => ({name: 'Alice', location: 'BJ'})
 
f =g;
// g =f; //报错

function overload(a:number, b:number): number
function overload(a:string, b:string): string
function overload(a:any, b:any): any{} 

//枚举类型
enum Fruit {Apple, Banana}
enum Color {Red, Yellow}
let fruit :Fruit.Apple = 3;
let no: number = Fruit.Apple;
// let color : Color.Red = Fruit.Apple


//类兼容性
class A {
  constructor(p:number, q:number){
  }
  id: number = 1;
  // private name: string = ''
}

class B {
  static s =1;
  constructor( q:number){
  }
  id: number = 2;
  // private name: string = ''
}
let aa = new A(1,2);
let bb = new B(1);
aa  = bb;
bb  = aa;
// 构造函数和 静态不比较    private 做比较

class C extends A {}

let cc = new C(1, 2)

aa =cc;
cc= aa;

//泛型兼容性
interface Empty<T>{

}
let obj1: Empty<number> = {}
let obj2 : Empty<number> = {}











