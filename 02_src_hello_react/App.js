// 创建“外壳”组件App
import React, {Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
// 创建并暴露App
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}