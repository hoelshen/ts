function searchXiaoJieJie(age: number): string {
  return '找到了' + age + '岁的小姐姐'
}
var age: number = 18
var result: string = searchXiaoJieJie(age)
console.log(result)

function searchXiaoJieJie2(age: number, stature?: string): string {
  let yy: string = ''
  yy = '找到了' + age + '岁'
  if (stature != undefined) {
    yy = yy + stature
  }
  return yy + '的小姐姐'
}
var result: string = searchXiaoJieJie2(22, '大长腿')
var result2: string = searchXiaoJieJie2(22)

console.log(result, result2)

function searchXiaoJieJie3(age: number = 18, stature: string = '大胸'): string {
  let yy: string = ''
  yy = '找到了' + age + '岁'
  if (stature != undefined) {
    yy = yy + stature
  }
  return yy + '的小姐姐'
}
var result: string = searchXiaoJieJie3()
console.log(result)

function searchXiaoJieJie4(...xuqiu: string[]): string {
  let yy: string = '找到了'
  for (let i = 0; i < xuqiu.length; i++) {
    yy = yy + xuqiu[i]
    if (i < xuqiu.length - 1) {
      yy = yy + '、'
    }
  }
  yy = yy + '的小姐姐'
  return yy
}
var result: string = searchXiaoJieJie4('22岁', '大长腿', '瓜子脸', '水蛇腰')
console.log(result)
