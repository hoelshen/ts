// let add =  (x:number, y:number) =>   number

// 后三种没有具体的实现 必须要调用
 type Add = (x:number, y:number) => number

//函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;

function add8(...rest:any):any{
  let first = rest[0];
  if(typeof first ==='string'){
    return rest.join()
  }
  if(typeof first === 'number'){
    // return rest.reduce((pre, cur)=>pre+cur)
  }
}






