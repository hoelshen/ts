//原始类型
let bool: boolean = true;
let num:number = 123;
let str: string = 'abc'


//数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

//元祖
let tuple : [number, string] = [0, '1']

tuple.push(2);
console.log(tuple)
// tuple[2];


//函数
let add = (x:number, y:number) => x+y;
let compute:(x: number, y:number) => number
compute = (a, b)=> a+ b;

//对象
let obj :{x:number, y :number} = {x:1 , y:2}
obj.x = 3; 


//symbol

let s1 :symbol = Symbol()
let s2 = Symbol()
console.log(s1===s2);


//undefined, null
let un: undefined = undefined
let nu:null = null;

num = undefined;
num = null

//void
let noReturn = () =>{}


//any
let x  


enum  Role{
  Reporter ,
  Developer,
  Maintainer,
  Owner,
  Guest
}


// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));


enum Message{
  success =  'ok',
  fail  = 'no'
}


 enum Char{
   //const

   a,
   b =Char.a,
   c=1+4,

   //computed
   d = Math.random(),
  e ='123'.length

 }

 //常量枚举
 compute