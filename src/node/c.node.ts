let c1 = require('./a.node')
let c2 = require('./b.node')
let c3 = require('../es6/a')
console.log(c1)
console.log(c2)
console.log(c3.default())

import c4 from '../es6/d' // 2
console.log(c4)

// common 里面不能导入es模块标准



//1.不要乱用两个模块

//2.特殊导出方法
c4()