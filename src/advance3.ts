
//索引类型


let obj  = {
  a:1,
  b:2,
  c:3
}

function getValue<T, K extends keyof T>(obj: T, keys: K[]):T[K][]{
  return keys.map(key => obj[key])
}



console.log(getValue(obj, ['a','b']))
console.log(getValue(obj, ['e','f']))


//keyof T
interface Obj {
  a:number,
  b:string
}

let key : keyof Obj

//T[K]
let value: Obj['a']

// T extends U


// 映射类型
interface Obj{
  a: number;
  b: string;
  c: boolean
}

type ReadonlyObj = Readonly<Obj>
// type PartialObj = Partial<Obj, 'a' | 'b'>
type ReadonluObj = Readonly<Obj>



//条件类型
// T extends U ? X : Y


type TypeName<T> = 
  T extends string ? 'string':
  T extends number ? 'number':
  T extends boolean ? 'boolean':
  T extends undefined ? 'undefined':
  T extends Function ? 'function':
  "object"


  type T1 = TypeName<string>

  type T2 = TypeName<string[]>

  //extends U ? X:Y 