//泛型函数
function log<T>(value:T):any{

  console.log(value)
  return value
}

log<string[]>(['a', 'b'])
log(['a', 'b'])

// type Log = <T>(value: T)=>T
//let myLog:log = log


interface Log{
  <T>(value:T): T
}
let myLog:Log;


 
