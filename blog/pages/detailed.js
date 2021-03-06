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

import Tocify from '../components/tocify.tsx'

import axios from 'axios'
import servicePath from '../config/servicePath'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components//Advert'
import Footer from '../components/Footer'

import '../static//style/pages/detailed.css'

const Detailed = (props) => {

  const render = new marked.Renderer();
  const tocify = new Tocify()
  render.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

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
  let markedStr2 = `# P01:课程介绍和环境搭建\n # P02:来个Hello World 初始Vue3.0\n`;
  let markedStr = '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

  let html = marked(props.article_content) 

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
                <Breadcrumb.Item><a href="/list">文章列表</a></Breadcrumb.Item>
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
              {/* <div className="detailed-content">
                {props.article_content}
              </div> */}
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
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
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
    axios(servicePath.getArticleById+id)
    .then( (res) => {
      reslove(res.data.data[0])
    })
  })
  
  return await promise
}

export default Detailed;
