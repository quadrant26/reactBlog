import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Affix} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined } from '@ant-design/icons'
// import ReactMarkdown from 'react-markdown'
// import MarkdownNavBar from 'markdown-navbar'
// import 'markdown-navbar/dist/navbar.css';
import marked from 'marked'
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/monokai-sublime.css';

import axios from 'axios'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components//Advert'
import Footer from '../components/Footer'

import '../static//style/pages/detailed.css'

const Detailed = (props) => {

  const render = new marked.Renderer();

  marked.setOptions({
    renderer: render, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let markedStr = `
    \`\`\`
      yarn add marked
      yarn add highlight

      import marked from 'marked'
      import hljs from "highlight.js";
      import 'highlight.js/styles/monokai-sublime.css';

      const renderer = new marked.Renderer();

      marked.setOptions({
          renderer: renderer, 
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: false,
          smartLists: true,
          smartypants: false,
          highlight: function (code) {
              return hljs.highlightAuto(code).value;
          }
      }); 

      let html = marked(props.article_content) 
    \`\`\`
    + renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    + gfm：启动类似Github样式的Markdown,填写true或者false
    + pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    + sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    + tables： 支持Github形式的表格，必须打开gfm选项
    + breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
    + smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    + highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成`

  let html = marked(markedStr) 

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
                <span><CalendarOutlined />{props.addTime}</span>
                <span><FolderOutlined />{props.typeName}</span>
                <span><FireOutlined />{props.view_count}人</span>
              </div>
              <div className="detailed-content">
                {props.article_cointent}
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html: html}}
              >
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              
            </div>
          </Affix>
        </Col>
      </Row>
      
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async(context) => {
  console.log(context.query.id)

  let id = context.query.id;

  const promise = new Promise( (reslove, reject) => {
    axios('http://127.0.0.1:7001/default/getArticleById/'+id)
    .then( (res) => {
      console.log(res)
      reslove(res.data.data[0])
    })
  })
  
  return await promise
}

export default Detailed;
