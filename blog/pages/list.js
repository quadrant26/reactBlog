import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Col, List, Breadcrumb} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined } from '@ant-design/icons'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components//Advert'
import Footer from '../components/Footer'

import '../static/style/pages/list.css'
import Axios from 'axios'
import servicePath from '../config/servicePath'

const MyList = (list) => {

  // const [Mylist, setMylist] = useState(list.data)
  const [Mylist, setMylist] = useState(
    [
      {"title": "青玉案·元夕", "content": "东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。 蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。"},
      {"title": "桂枝香·金陵怀古", "content": "登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇。归帆去棹残阳里，背西风，酒旗斜矗。彩舟云淡，星河鹭起，画图难足。 念往昔，繁华竞逐，叹门外楼头，悲恨相续。千古凭高对此，谩嗟荣辱。六朝旧事随流水，但寒烟衰草凝绿。至今商女，时时犹唱，后庭遗曲。"},
      {"title": "卜算子·咏梅", "content": "驿外断桥边，寂寞开无主。已是黄昏独自愁，更着风和雨。 无意苦争春，一任群芳妒。零落成泥碾作尘，只有香如故。"},
      {"title": "鹊桥仙·纤云弄巧", "content": "纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。 柔情似水，佳期如梦，忍顾鹊桥归路！两情若是久长时，又岂在朝朝暮暮。"}
    ]
  )
  return (
    <div className="container">
      <Head>
        <title>List</title>
      </Head>

      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
          <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List 
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={Mylist}
              renderItem={item=>(
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icons">
                    <span><CalendarOutlined />2020-06-03</span>
                    <span><FolderOutlined />详细</span>
                    <span><FireOutlined />2020人</span>
                  </div>
                  <div className="list-content">{item.content}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      
      <Footer />
    </div>
  )
}

MyList.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise( (resolve, reject) => {
    Axios(servicePath.getListById+id).then( res => {
      resolve(res)
    })
  })

  return await promise
}

export default MyList