import {Avatar, Divider} from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons'

import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size="100" src="../static/images/Snipaste-06.png" /></div>
            <div className="author-introduction">这个人太懒了，没有写简介</div>
            <Divider>社交账户</Divider>
            <Avatar size={28} icon={<GithubOutlined />} className="account"/>
            <Avatar size={28} icon={<QqOutlined />} className="account"/>
            <Avatar size={28} icon={<WechatOutlined />} className="account"/>
        </div>
    )
}

export default Author;