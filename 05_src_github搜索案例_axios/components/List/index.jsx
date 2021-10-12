import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {isFirst, isLoading, users, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字搜索！</h2> :
                    isLoading ? <h2>Loading......</h2> :
                    err ? <h2 style={{color: "red"}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img src={userObj.avatar_url} alt="avator" style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
