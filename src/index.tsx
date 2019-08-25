import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from "mobx-react"
import store from './redux/mobx';
import Root  from './routers';


console.log(Root);
ReactDom.render(
  // 在这里我们要使用mobx-react里的Provider，
  // 把所有的state注入Provider中，后面的子组件都可以使用@inject("想要使用的state")注入被观察者。
  <Provider Store= {store}>
  <Root />
  </Provider>,
  document.querySelectorAll('.app')[0]
) 