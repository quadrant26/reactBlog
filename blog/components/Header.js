import React from 'react';
import '../static/style/components/header.css'

import {Row, Col, Menu} from 'antd'
import {HomeOutlined, YoutubeOutlined, SmileOutlined} from '@ant-design/icons'

const Header = () => (
    <div className="header">
        <Row tyle="flex" justity="center">
            <Col cs={12} sm={24} md={10} lg={10} xs={10}>
                <span className="header-logo">Quadrant</span>
                <span className="header-text">长风霜雪侠客行</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <YoutubeOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />
                        文章
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)


export default Header;