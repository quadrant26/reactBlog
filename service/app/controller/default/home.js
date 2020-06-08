"use strict";

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index (){
        let result = await this.app.mysql.get('blog_contnet', {})
        console.log(result)
        this.ctx.body = result
    }

    async getArticleList (){
        let sql = 'SELECT article.id as id,' +
            'article.title as title,' + 
            'article.introduce as introduce,' + 
            'FROM_UNIXTIME(article.addTime, "%Y-%m-%d %H:%i:%s") as addTime,' + 
            'article.view_count as view_count, ' + 
            'type.typeName as typeName ' + 
            'FROM article LEFT JOIN type ON article.type_id = type.id'
        
            // console.log(sql)
        const results = await this.app.mysql.query(sql);

        this.ctx.body = {
            data: results
        }
    }

    async getArticleById (){
        
        let id = this.ctx.params.id;

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' + 
            'article.introduce as introduce,' + 
            'article.article_cointent  as article_cointent,' + 
            'FROM_UNIXTIME(article.addTime, "%Y-%m-%d %H:%i:%s") as addTime,' + 
            'article.view_count as view_count, ' + 
            'type.typeName as typeName, ' + 
            'type.id as typeId ' + 
            'FROM article LEFT JOIN type ON article.type_id = type.id ' + 
            'WHERE article.id='+id
        
        const results = await this.app.mysql.query(sql);

        this.ctx.body = {
            data: results
        }
    }

    // 得到类别名和编号
    async getTypeInfo (){
        const result = await this.app.mysql.select('type');
        this.ctx.body = result;
    }

    async getListById (){
        let id = this.ctx.params.id
        let sql = 'SELECT article.id as id,'+
            'article.title as title,'+
            'article.introduce as introduce,'+
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
            'article.view_count as view_count ,'+
            'type.typeName as typeName '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id '+
            'WHERE type_id='+id
        const result = await this.app.mysql.query(sql)
        this.ctx.body={data:result}
    }
}

module.exports = HomeController