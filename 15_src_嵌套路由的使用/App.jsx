import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import About from "./pages/About"
import Home from "./pages/Home"
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                    {/* 原生html中，靠<a />实现跳转不同的页面 */}
                    {/* <a className="list-group-item active" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}

                    {/* 在React中，靠路由链接实现切换组件 */}
                    {/* 
                        解决多级路径刷新页面样式丢失的问题：
                            1、public/index.html中，引入样式时，不写 ./ 写 / （常用）
                            2、public/index.html中，引入样式时，不写 ./ 写 /%PUBLIC_URL%（常用）
                            3、使用HashRouter
                    */}
                    <MyNavLink to="/about">About</MyNavLink>
                    <MyNavLink to="/home">Home</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        {/* 注册组件 */}
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/home" component={Home} />
                            <Redirect to="/about" />
                        </Switch>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
