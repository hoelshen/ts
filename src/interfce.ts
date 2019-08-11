interface List {
  readonly id: number,
  name: string,
  age?: number
}

interface Result {
  data: List[]
}

function Render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

// let result = {
//   data:[
//     {id:1, name:'sjh'},
//     {id:2, name:'hsq'},    
//   ]
// }
// Render(result);

// 出现下面这种情况会报错
// Render(
//   {
//     data:[
//       {id:1, name:'sjh',sex:'male'},
//       {id:2, name:'hsq'},    
//     ]
//   }
// )

//解决方法一：
// Render(
//   {
//     data:[
//       {id:1, name:'sjh',sex:'male'},
//       {id:2, name:'hsq'},    
//     ]
//   } as Result
// )

//解决方法二：
// interface List{
//   id: number,
//   name:string,
//   [x: string]: any
// }

//解决方法三
// Render(<Result>
//   {
//     data:[
//       {id:1, name:'sjh',sex:'male'},
//       {id:2, name:'hsq'},    
//     ]
//   }
// )


interface StringArray {
  [index: number]: string
}

// let chars:StringArray = ["A", "B"]
// console.log('chars', chars)

// let add:(x:number, y:number)=>number 

// //方法定义接口
// interface Add {
//   (x:number, y:number): number
// }

//类型别名
//  type Add = (x:number, y:number) => number

//实现具体的函数
//  let add :Add = (a,b) => a+b


//混合类型的接口
interface Lib {
  (): void,
  verson: string,
  doSometing(): void

}


//因为得到的是个单例
function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.verson = "1.1.0",
    lib.doSometing = () => { }

  return lib
}


let lib1 = getLib();
lib1();
lib1.doSometing();

let lib2 = getLib();
