import React, { Component } from 'react'
import './Reg.css'
import { res } from '../../util/request'
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                nickname: '',
                password: ''
            }
        }
    }
    //点击注册按钮
    toReg() {
        res(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.props.history.push('/login')
                alert(res.data.msg)
            } else {
                alert(res.data.msg)
            }

        })
    }
    goBack() {
        this.props.history.goBack()
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
            <div className='Reg'>
                <header className='Reg-header'><span className='Reg-back' onClick={() => this.goBack()}>返回</span>注册</header>
                <ul className='Reg-ul'>
                    <li>手机号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} /></li>
                    <li>昵称：<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, 'nickname')} /></li>
                    <li>密码：<input type="text" value={user.password} onChange={(e) => this.changeUser(e, 'password')} /></li>
                    <li className='Reg-li'><button onClick={() => this.toReg()}>注册</button></li>
                </ul>
            </div>
        )
    }
}
