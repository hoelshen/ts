




export interface P{
  y:number
  x: number
}

//默认导出，无需函数名
export default function(){
  console.log('I am default')
}

//引入外部模块， 重新导出
// export { str as hello } from './b'