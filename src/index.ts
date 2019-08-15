{
  // for(let i; i<10; i++){
  //     let button[i]: HTMLButtonElement = document.createElement('button')
  //     button[i].textContent = '[i]';
  //     document.appendChild(button[1])
  // }
}

function createButton(text: string) {
  let button: HTMLButtonElement = document.createElement('button')
  button.textContent = text
  document.body.appendChild(button)
}

// '0123456789'
//   .split('')

;['0', '1', '2', '3'].forEach((text: any) => {
  createButton(text)
})

interface StringArray{
  [index:number]:string
}

let chars:StringArray = ["A", "B"]
console.log('chars', chars)


interface Name {
  [x:string] :string,
  // y:number  //这是不被允许的
}


