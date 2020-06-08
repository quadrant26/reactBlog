let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList: ipUrl + 'getArticleList',   // 首页
    getArticleById: ipUrl + 'getArticleById/',   // 详细页
    getTypeInfo: ipUrl + 'getTypeInfo', // 导航列表
    getListById: ipUrl + 'getListById/', // 根据类别ID获得文章列表  
}

export default servicePath;