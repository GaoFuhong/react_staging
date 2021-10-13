import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {
    // 回退
    back = () => {
        this.props.history.goBack()
    }

    // 前进
    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

export default withRouter(Header)

// withRouter可以加工一般组件，让一般组件具有路由组件的API
// withRouter的返回值是一个新组件
