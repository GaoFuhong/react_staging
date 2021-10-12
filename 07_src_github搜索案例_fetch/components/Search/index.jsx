import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    serach = async () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前更新App状态
        PubSub.publish('github', {isFirst: false, isLoading: true})
        // #region --- 使用axios发送请求
        // axios.get(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         // 请求成功后通知App更新状态
        //         PubSub.publish('github', {isLoading: false, users: response.data.items})
        //     },
        //     error => {
        //         // 请求失败后通知App更新状态
        //         PubSub.publish('github', {isLoading: false, err: error.message})
        //     }
        // )
        // #endregion

        // 使用fetch发送请求（未优化）
        /*
        fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了')
                return response.json()
            },
            error => {
                console.log('联系服务器失败了', error)
                return new Promise(() => {})
            }
        ).then(
            response => {
                console.log('获取数据成功了', response)
            },
            error => {
                console.log('获取数据失败了', error)
            }
        )
        */

        // 使用fetch发送请求（优化）
        /*
        fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了')
                return response.json()
            }
        ).then(
            response => {
                console.log('获取数据成功了', response)
            }
        ).catch(
            error => console.log('请求失败', error)
        )
        */
        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('github', {isLoading: false, users: data.items})
        } catch(error) {
            console.log('请求出错', error)
            PubSub.publish('github', {isLoading: false, err: error.message})
        }
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
