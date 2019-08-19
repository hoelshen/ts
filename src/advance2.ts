//  交叉类型
interface CatInterface{
  jump(): void
}
interface DogInterface{
  run(): void
}

let pet : CatInterface & DogInterface = {

}



let a:number  | string = 'a'
let b : 'a' | 'b ' | 'c'
let c: 1 | 2 | 3

class Dog implements DogInterface{
  run(){}
  eat(){}
}


class Cat implements DogInterface{
  jump(){}
  eat(){}
}

enum Master { Boy, Girl}

function getPet(master:Master){
  let pet = master === Master.Boy ? new Dog() : new Cat();
  pet.eat()
  // pet.run() // 不行  因为还没确定下来
  return pet
}

//区分 并集 和交集
interface Rectangle {
  kind: "rectangle",
  width: number,
  height: number
}

interface Square{
  kind: "square",
  size: number
}

interface Circle {
  kind: "circle",
  r: number,
}

type Shape = Square | Rectangle | Circle

function area(s: Shape){
  switch (s.kind) {
    case 'square':
      return s.size * s.size
      break;
    case 'circle':
      return Math.PI* s.r
      break;
    case 'rectangle':
      return s.height * s.width
      break;
    default:
      return ((e:never) => {throw new Error(e)})(s)
      break;
  }
}




