import React from 'react'
import '../index/index.css'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge } from 'antd';
import Date from '../../components/Date/Date'
import Goods from '../../components/Goods/Good'
import GoodsSingle from '../../components/GoodsSingle/GoodsSingle'
import Indent from '../../components/Indent/Indent'
import TakeStock from '../../components/TakeStock/TakeStock'
import LogoImg from '../../img/logo.png'
import UserImg from '../../img/timg.jfif'
import {
    // htm5的浏览器路由模式
    BrowserRouter as Router,
    // 哈希模式
    // HashRouter as Router,
    // MemoryRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class Alayout extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <div className="logo" />

                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['6']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="0"><img className="logoImg" src={LogoImg} alt="" /></Menu.Item>
                            <Menu.Item key="1">
                                <Icon type="home" />
                                首页</Menu.Item>
                            <Menu.Item key="2">餐厅</Menu.Item>
                            <Menu.Item key="3">故障处理</Menu.Item>
                            <Menu.Item key="4">现金管理</Menu.Item>
                            <Menu.Item key="5">CMS</Menu.Item>
                            <Menu.Item key="6">IMS</Menu.Item>
                            <span style={{ marginLeft: 700 }}>
                                <Badge count={1}>
                                    <Avatar shape="square" icon="user" src={UserImg} />
                                </Badge>
                                <span style={{ marginLeft: 20 }}>奥利给-(餐厅经理)</span>
                            </span>
                        </Menu>

                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>IMS</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user" />
                                                送货班表
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="1"><Link to="/Date">送货日历</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop" />
                                                电子进货单管理
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="5"><Link to="/GoodsSingle">进货单</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                                <Icon type="notification" />
                                                订货管理
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="9"><Link to="/Indent">订货</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub4"
                                        title={
                                            <span>
                                                <Icon type="book" />
                                                盘点管理
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="13"><Link to="/TakeStock">周月盘</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub5"
                                        title={
                                            <span>
                                                <Icon type="build" />
                                                调拨管理
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="14"><Link to="/Goods">调拨单</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub6"
                                        title={
                                            <span>
                                                <Icon type="bar-chart" />
                                                计算周月报
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="15">option15</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub7"
                                        title={
                                            <span>
                                                <Icon type="pie-chart" />
                                                周月报表查询
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="16">option16</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    <Route path="/Date">
                                        <Date />
                                    </Route>
                                    <Route path="/Goods">
                                        <Goods />
                                    </Route>
                                    <Route path="/GoodsSingle">
                                        <GoodsSingle />
                                    </Route>
                                    <Route path="/Indent">
                                        <Indent />
                                    </Route>
                                    <Route path="/TakeStock">
                                        <TakeStock />
                                    </Route>
                                </Switch>
                                <Redirect to="/Date" />
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}
