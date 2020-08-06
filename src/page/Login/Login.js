import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { login } from '../../util/request'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                password: ''
            }
        }
    }
    into() {
        const { user } = this.state
        login(user).then(res => {
            if (res.data.code == 200) {
                this.props.history.push('/index')
            } else {
                alert(res.data.msg)
            }
        })
    }
    //输入框onchange改变
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className='login'>
                <header className='login-header'>登录<Link className='login-reg' to='/reg'>注册</Link></header>
                <ul className='login-ul'>
                    <li>账号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} /></li>
                    <li>密码：<input type="text" value={user.password} onChange={(e) => this.changeUser(e, 'password')} /></li>
                    <li className='login-li1'><span>忘记密码</span></li>
                    <li className='login-li2'><button onClick={() => this.into()}>登录</button></li>
                </ul>
            </div>
        )
    }
}
