import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import HeadeNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'

const {SubMenu} = Menu;

import 'antd/lib/layout/style/css'

import {BrowserRouter, Route, Link} from 'react-router-dom'
import SmallApp from './smallApp/Routes'

const {Header, Content, Footer, Sider} = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout className="layout __main__">
        <HeadeNav/>
        <BrowserRouter>
          <Layout>
            <Sider width={200} style={{background: '#fff'}}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['smallapp']}
                style={{height: '100%', borderRight: 0}}
              >
                <SubMenu key="smallapp" title={<span><Icon type="user"/>smallapp</span>}>
                  <Menu.Item key="1"><Link to={"/app/smallapp/home"}>home</Link></Menu.Item>
                  <Menu.Item key="2"><Link to={"/app/smallapp/about"}>about</Link></Menu.Item>
                  <Menu.Item key="3"><Link to={"/app/smallapp/notfound"}>notFound</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop"/>android</span>}>
                  <Menu.Item key="5" disabled={true}>java</Menu.Item>
                  <Menu.Item key="8" disabled={true}>kotlin</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification"/>ios</span>}>
                  <Menu.Item key="9" disabled={true}>Object-C</Menu.Item>
                  <Menu.Item key="10" disabled={true}>Switf</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{padding: '0 50px'}}>
              <Breadcrumb style={{margin: '12px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{background: '#fff', padding: 24, minHeight: '100%'}}>
                <Route path={"/app/smallapp"} component={SmallApp}/>
              </div>
            </Content>
          </Layout>
        </BrowserRouter>
        <FooterCommon/>
      </Layout>
    )
  }
}


export default App