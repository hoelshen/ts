//泛型类
class Mylog<T>{
  run(value:T){
    console.log(value)
    return value;
  } 
}

let log1 = new Mylog<number>()
log1.run(1)

let log2 = new Mylog()
log2.run('2')

interface Length{
  length:number
}
function log<T extends Length>(value:T):T{
  console.log(value, value.length)
  return value;
} 
log([1]);
log('123')  

//泛型的好处，
// 1.函数和类可以轻松的支持多种类型， 增强程序的扩展性
// 2.不必写多条函数重载， 冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束
 