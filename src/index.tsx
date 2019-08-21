import React from 'react';
import ReactDom from 'react-dom' 



import Hello from './components/demo/Hello'
import HelloClass from './components/HelloClass'
import HelloHOC from './components/HelloHOC'
import HelloHooks from './components/demo/HelloHooks'


ReactDom.render(
  // <HelloClass name="2323d" firstName ={''}/>,
  
  // <HelloClass name="2323d" firstName ={''}/>,
  // <HelloHOC name="2323d" loading={false}/>,
  <HelloHooks name="2323d" firstName={''}/>,
  document.querySelectorAll('.app')[0]
)