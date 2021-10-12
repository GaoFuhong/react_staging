import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    serach = () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前更新App状态
        this.props.updateAppState({isFirst: false, isLoading: true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // 请求成功后通知App更新状态
                this.props.updateAppState({isLoading: false, users: response.data.items})
            },
            error => {
                // 请求失败后通知App更新状态
                this.props.updateAppState({isLoading: false, err: error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入用户名点击搜索"/>&nbsp;
                    <button onClick={this.serach}>搜索</button>
                </div>
            </section>
        )
    }
}
