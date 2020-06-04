import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined } from '@ant-design/icons'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components//Advert'
import Footer from '../components/Footer'

import '../static//style/pages/detailed.css'

const Detailed = () => {

  

  return (
    <div className="container">
      <Head>
        <title>Detailed</title>
      </Head>

      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/list">w文章</a></Breadcrumb.Item>
                <Breadcrumb.Item>文章详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
              青玉案·元夕</div>
              <div className="list-icon center">
                <span><CalendarOutlined /> 2019-06-28</span>
                <span><FolderOutlined />文章</span>
                <span><FireOutlined /> 5498人</span>
              </div>

              <div className="detailed-content" >
                详细内容，下节课编写
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      
      <Footer />
    </div>
  )
}

export default Detailed;
