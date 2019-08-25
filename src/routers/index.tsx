import React  from 'React';
import  {Switch,BrowserRouter,Redirect, Route}  from 'react-router-dom'

import Hello from '../components/demo/Hello'
import HelloClass from '../components/HelloClass'
import HelloHOC from '../components/HelloHOC'
import HelloHooks from '../components/demo/HelloHooks'
import Casual from "../components/Casual"


const Root = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Hello} />
        <Route  path="/HelloHOC" component={HelloHOC} />
        <Route  path="/HelloHooks" component={HelloHooks} />
        <Route  path="/HelloClass" component={HelloClass} />
        <Route  path="/Casual" component={Casual} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}


export default  Root;


















