import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom'
import '../static/style/components/header.css'
import ReactDOM from 'react-dom';

import {Row, Col, Menu} from 'antd'
import * as Icon from '@ant-design/icons'
import {HomeOutlined} from '@ant-design/icons'

import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/servicePath'

const Header = () => {

    const [navArray, setNavArray] = useState([])
    // 获取类别
    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(res => {
                return res.data
            });
            setNavArray(result);
        }
        
        fetchData();
    }, [])

    const handleClick = (e) => {
        if(e.key == 0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    let homeOutlined = 'HomeOutlined';

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col cs={12} sm={24} md={10} lg={10} xs={10}>
                    <span className="header-logo">Quadrant</span>
                    <span className="header-text">长风霜雪侠客行</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        {/* <Menu.Item key="home">
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
                        </Menu.Item> */}
                        {/* <Menu.Item key="0">
                            <Icon type="home" />
                            首页
                        </Menu.Item> */}
                        <Menu.Item key="0">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map( (item) => {
                                let iconspan = item.type.replace(item.type[0], item.type[0].toUpperCase()) + 'Outlined';
                                return (
                                    <Menu.Item key={item.id}>
                                        {item.typeName}
                                    </Menu.Item>
                                );
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}


export default Header;