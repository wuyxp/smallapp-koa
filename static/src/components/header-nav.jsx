import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Avatar, Icon } from 'antd';

import { signOutApi } from '../api/sign-out';

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

const handleSignOut = async () => {
  console.log('退出登录');
  await signOutApi();
};

const generatorAvatar = userinfo => {
  if(userinfo.url){
    return <Avatar src={userinfo.url}></Avatar>
  }else{
    return <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{ userinfo.name && userinfo.name.charAt(0)}</Avatar>
  }
}

const showInfo = (isLogin, userinfo) => (
  isLogin ? 
    <div className="yes-login">
      {generatorAvatar(userinfo)} 
      <span className="user-name">{userinfo.name}</span>
      <a href="javascript:;" title="退出登录" onClick={handleSignOut}><Icon type="logout" /></a>
    </div>
     :
    <div className="no-login">
      <Icon type="frown-o" style={{ fontSize: 16, color: '#ccc' }} />
      <span>未登录</span>
      
    </div>
)

class HeaderNav extends React.Component {
  state = {
    defaultLogoUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI4AM8aD2S0Q5fPEEeHcBK2QYb9hrHPCcKtRZicKic8m6PG1KZwoQYdhvWARulUeyY41aTFuBicyybYA/132",
    isLogin: false,
    userinfo:{
      
    },
  };
  componentDidMount(){
    const userinfo = Cookies.get('userinfo');
    if(userinfo){
      this.setState({
        isLogin: true,
        userinfo: JSON.parse(userinfo)
      })
    }
  }
  render() {
    return (
      <Header>
        <div className="logo"></div>
        <div className="user-logo">
          {showInfo(this.state.isLogin, this.state.userinfo)}
        </div>
      </Header>
    )
  }
}


export default HeaderNav