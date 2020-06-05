# reactBlog
reactBlog

## 前台搭建
1. 使用 Next.js 创建 blog

    ``` node
        // 全局安装
        npm install -g create-next-app
        // 生成项目
        npx create-next-app projectName
    ```

2. 安装依赖

    ```node
        // 使用css
        yarn add @zeit/next-css
        // 安装 antd
        yarn add antd 
        yarn add babel-plugin-import
        // 安装 react-markdown
        yarn add react-markdown
        // markdown 导航
        yarn add markdown-navbar
    ```

    配置 next.config.js

    ``` javascript
        const withCss = require('@zeit/next-css')

        if(typeof require !== 'undefined'){
            require.extensions['.css']=file=>{}
        }

        module.exports = withCss({})
    ```

    配置 .babelrc

    ``` javascript
        const withCss = require('@zeit/next-css')

        if(typeof require !== 'undefined'){
            require.extensions['.css']=file=>{}
        }

        module.exports = withCss({})
    ```

    antd 4.0 引入 Icon 错误

    ``` javascript
        // 4.0 按需引入
        import { SmileOutlined } from '@ant-design/icons';

        <SmileOutlined />
        <Button icon={<SmileOutlined />} />

        // 兼容引入
        import { Icon } from '@ant-design/compatible';

        <Icon type="smile" />
        <Button icon="smile" />
    ```

    react-markdown 使用
    ```javascript
        import ReactMarkdown from 'react-markdown'

        <ReactMarkdown 
            source={markdown}
            escapeHtml={false}
        />
    ```

    markdown-navbar 使用
    ```javascript
        import MarkdownNavBar from 'markdown-navbar'
        import 'markdown-navbar/dist/navbar.css';

        <MarkdownNavBar
            className="article-menu"
            source={markdown}
            headingTopOffset={0} // 距离顶部距离
            ordered={false} // 是否有编号
        />
    ```

## 中间控制台

3. egg.js

    ```javascript
        npm i egg-init -g
        // 生成
        egg-init --type=simple

        yarn add egg-mysql
    ```

    RESTful 规范
    + GET(SELECT) ： 从服务端取出资源，可以同时取出一项或者多项。
    - POST(CREATE) ：在服务器新建一个资源。
    - PUT(UPDATE) ：在服务器更新资源（客户端提供改变后的完整资源）。
    - DELETE(DELETE) ：从服务器删除资源。

    ```javascript
        // server/config/plugin.js
        exports.mysql = {
            enable: true,
            package: 'egg-mysql'
        }
        // server/config/config.default.js
        config.mysql = {
            // database configuration
            client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: 'admin123',
            // database
            database: 'blog',    
            },
            // load into app, default is open
            app: true,
            // load into agent, default is close
            agent: false,
        }
    ```

    解决跨域

    ```javascript
        // install 
        yarn add egg-cors

        // /service/config/plugin.js
        exports.cors: {
            enable: true,
            package: 'egg-cors'
        }

        // 配置 config.default.js
        config.security = {
    　　　　csrf: {
    　　　　　　enable: false
    　　　　},
    　　　　domainWhiteList: [ '*' ]
    　　};
        config.cors = {
            origin: '*',
            // origin: 'http://localhost:3000', //只允许这个域进行访问接口
            // credentials: true,   // 开启认证
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
        };
    ```

4. marked and highlight

    ```javascript

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
    ```
    + renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    + gfm：启动类似Github样式的Markdown,填写true或者false
    + pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    + sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    + tables： 支持Github形式的表格，必须打开gfm选项
    + breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
    + smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    + highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成