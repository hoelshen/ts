import React from 'react'

import { Button } from 'antd'


interface Greeting {
  name: string,
  firstName: string,
  lastName: string
}
const Hello = (props:Greeting)=> <h1>Hello {props.name}</h1>

// const Hello: Rea  ct.FC<Greeting> = (
//   {
//     name,
//     firstName,
//     lastName
//   }
// ) => <Button>Hello {name}</Button> 

Hello.defaultProps = {
  firstNam: '',
  lastName: ""
}


export default Hello