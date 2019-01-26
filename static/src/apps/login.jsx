import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import FormGroup from '../components/form-group.jsx'
import HeadeNav from '../components/header-nav.jsx'
import FooterCommon from '../components/footer-common.jsx'

import logobg from '../images/logo.jpg'

import 'antd/lib/layout/style/css'

const { Content } = Layout

class App extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{
          background: `url(${logobg}) no-repeat center center`,
          backgroundSize: 'cover',
          height: '100%'
        }}>
        <HeadeNav />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0', color: '#fff' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: 24, minHeight: 280 }}>
            <span>测试一下能否触发jenkins自动build</span>
            <FormGroup />
          </div>
        </Content>
        <FooterCommon />
      </Layout>
    )
  }
}


export default App